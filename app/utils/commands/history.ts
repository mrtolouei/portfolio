import type { Command } from "~/types/command"

export const history: Command = {
    name: "history",
    description: "Show command history (optionally limit the number of entries)",
    execute(args, ctx) {
        const limit = Number(args[0])
        const commandsOnly = ctx.history
            .filter(item => item.type === "command")
            .map(item => item.content)
        const result = !isNaN(limit) && limit > 0
            ? commandsOnly.slice(-limit)
            : commandsOnly
        ctx.addOutput(
            result.map((cmd, i) => `${i + 1}  ${cmd}`).join("\n")
        )
    },
}
