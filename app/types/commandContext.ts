export interface CommandContext {
    addOutput: (text: string) => void
    clear: () => void
    history: { type: string; content: string }[],
    shutdown: () => void
}