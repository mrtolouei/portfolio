export const useTerminal = () => {
    const input = ref('')
    const history = ref<{type:string; content:string}[]>([])

    const addOutput = (text:string) => {
        history.value.push({type: 'output', content: text})
    }
    const addCommand = (text:string) => {
        history.value.push({type: 'command', content: text})
    }
    const clear = () => {
        history.value = []
    }
    const runCommand = () => {
        const raw = input.value.trim()
        if (!raw) return
        addCommand(raw)
        const [name, ...args] = raw.split(' ')
        if (!name) {
            addOutput('Invalid command')
            return
        }
        const cmd = commands[name.toLowerCase()]
        if (!cmd) {
            addOutput(`Command not found: ${name}`)
        } else {
            cmd.execute(args, { addOutput, clear })
        }
        input.value = ''
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
        terminalRef
    }
}