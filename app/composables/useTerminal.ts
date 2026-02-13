const startTime = Date.now()
export const useTerminal = () => {
    const input = ref('')
    const history = ref<{type:string; content:string}[]>([])
    const isRunning = ref(false)

    const addOutput = (text:string) => {
        history.value.push({type: 'output', content: text})
    }
    const addCommand = (text:string) => {
        history.value.push({type: 'command', content: text})
    }
    const clear = () => {
        history.value = []
    }
    const runCommand = async () => {
        const raw = input.value.trim()
        if (!raw) return
        addCommand(raw)
        input.value = ''
        isRunning.value = true
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
                await cmd.execute(args, { addOutput, clear })
            } catch (err: any) {
                addOutput(`Error: ${err.message || err}`)
            }
        }
        isRunning.value = false
        scrollToBottom()
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
        isRunning
    }
}