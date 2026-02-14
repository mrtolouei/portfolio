const startTime = Date.now()
export const useTerminal = () => {
    const input = ref('')
    const history = ref<{ type: string; content: string }[]>([])
    const isRunning = ref(false)
    const suggestion = ref('')
    const historyIndex = ref(-1)
    const isShuttingDown = ref(false)
    const shutdownMessages = ref<string[]>([])
    const showRestartPrompt = ref(false)
    const showFakeProgress = ref(false)
    const addOutput = (text: string) => {
        history.value.push({type: 'output', content: text})
    }
    const addCommand = (text: string) => {
        history.value.push({type: 'command', content: text})
    }
    const clear = () => {
        history.value = []
        historyIndex.value = -1
    }

    watch(input, (val) => {
        if (!val) {
            suggestion.value = ''
            return
        }
        const match = commandNames.find(cmd =>
            cmd.startsWith(val.toLowerCase())
        )
        suggestion.value = match && match !== val ? match : ''
    })

    const runCommand = async () => {
        const raw = input.value.trim()
        if (!raw) return
        addCommand(raw)
        input.value = ''
        suggestion.value = ''
        isRunning.value = true
        historyIndex.value = -1
        const [name, ...args] = raw.split(' ')
        if (!name) {
            addOutput('Invalid command')
            return
        }
        const cmd = commands[name.toLowerCase()]
        if (!cmd) {
            addOutput(`Command not found: ${name}`)
        } else {
            try {
                await cmd.execute(args, {
                    addOutput,
                    clear,
                    history: history.value,
                    shutdown: runShutdown
                })
            } catch (err: any) {
                addOutput(`Error: ${err.message || err}`)
            }
        }
        isRunning.value = false
        scrollToBottom()
    }

    const autocomplete = () => {
        if (suggestion.value) {
            input.value = suggestion.value
            suggestion.value = ''
        }
    }

    const navigateHistory = (direction: 'up' | 'down') => {
        const commandsOnly = history.value
            .filter(item => item.type === 'command')
            .map(item => item.content)

        if (!commandsOnly.length) return

        if (direction === 'up') {
            if (historyIndex.value < commandsOnly.length - 1) {
                historyIndex.value++
            }
        } else {
            if (historyIndex.value >= 0) {
                historyIndex.value--
            }
        }

        if (historyIndex.value === -1) {
            input.value = ''
        } else {
            input.value = commandsOnly[commandsOnly.length - 1 - historyIndex.value] ?? ''
        }
    }

    const runShutdown = async () => {
        isShuttingDown.value = true
        showRestartPrompt.value = false
        clear()

        const messages = [
            '[ok] Stopping Network Manager...',
            '[ok] Stopping User Sessions...',
            '[ok] Terminating background services...',
            '[ok] Stopping System Logging...',
            '[ok] Saving system clock...',
            '[ok] Powering off...'
        ]

        for (const msg of messages) {
            shutdownMessages.value.push(msg)
            await new Promise(r => setTimeout(r, 700))
        }
        shutdownMessages.value = []
        await new Promise(r => setTimeout(r, 500))
        showRestartPrompt.value = true
    }

    const restartTerminal = async () => {
        showRestartPrompt.value = false
        showFakeProgress.value = true
        shutdownMessages.value = []

        const total = 20
        for (let i = 0; i <= total; i++) {
            shutdownMessages.value = [`Loading system:\n[${'='.repeat(i * 2)}${' '.repeat(total * 2 - i * 2)}] ${i * 5}%`]
            await new Promise(r => setTimeout(r, 100))
        }

        showFakeProgress.value = false
        isShuttingDown.value = false
        shutdownMessages.value = []
        clear()
    }

    const terminalRef = ref<HTMLElement | null>(null)

    const scrollToBottom = () => {
        nextTick(() => {
            if (terminalRef.value) {
                terminalRef.value.scrollTop = terminalRef.value.scrollHeight
            }
        })
    }

    const handleKeydown = (e: KeyboardEvent) => {
        const isCmdOrCtrl = e.metaKey || e.ctrlKey
        if (isCmdOrCtrl && e.key.toLowerCase() === 'k') {
            e.preventDefault()
            clear()
        }
        if (isShuttingDown.value && showRestartPrompt.value && e.key === 'Enter') {
            e.preventDefault()
            restartTerminal()
        }
    }

    onMounted(() => {
        window.addEventListener('keydown', handleKeydown)
    })

    onUnmounted(() => {
        window.removeEventListener('keydown', handleKeydown)
    })

    return {
        input,
        history,
        runCommand,
        terminalRef,
        isRunning,
        autocomplete,
        suggestion,
        navigateHistory,
        isShuttingDown,
        shutdownMessages,
        showRestartPrompt,
        showFakeProgress,
        runShutdown,
        restartTerminal,
    }
}