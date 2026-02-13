import type {Command} from "~/types/command";

export const whoami: Command = {
    name: 'whoami',
    description: 'Show current user',
    execute(args, ctx) {
        ctx.addOutput('visitor')
    }
}