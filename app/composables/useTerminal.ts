const startTime = Date.now()
export const useTerminal = () => {
    const input = ref('')
    const history = ref<{type:string; content:string}[]>([])
    const isRunning = ref(false)
    const suggestion = ref('')
    const historyIndex = ref(-1)

    const addOutput = (text:string) => {
        history.value.push({type: 'output', content: text})
    }
    const addCommand = (text:string) => {
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
                await cmd.execute(args, { addOutput, clear, history: history.value })
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
        navigateHistory
    }
}