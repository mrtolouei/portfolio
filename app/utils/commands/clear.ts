import type {Command} from "~/types/command";

export const clear: Command = {
    name: 'clear',
    description: 'Clear terminal output',
    execute(args, ctx) {
        ctx.clear()
    }
}