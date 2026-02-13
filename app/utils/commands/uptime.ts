import type { Command } from "~/types/command"
import type { CommandContext } from "~/types/commandContext"
import {startTime} from "~/data/terminalStart";

// helper برای فرمت زمان
function formatDuration(ms: number) {
    const totalSeconds = Math.floor(ms / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return `${hours}h ${minutes}m ${seconds}s`
}

export const uptime: Command = {
    name: "uptime",
    description: "Show how long the terminal has been running",
    execute: async (_args, ctx: CommandContext) => {
        const now = Date.now()
        const diff = now - startTime
        const formatted = formatDuration(diff)

        ctx.addOutput(`Terminal Uptime: ${formatted}`)
    },
}
