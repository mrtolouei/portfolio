import type { Command } from "~/types/command"

export const echo: Command = {
    name: "echo",
    description: "Print text to the terminal",
    execute(args, ctx) {
        if (!args.length) {
            ctx.addOutput("")
            return
        }
        ctx.addOutput(args.join(" "))
    },
}
