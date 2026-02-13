import type {Command} from "~/types/command";

export const date: Command = {
    name: 'date',
    description: 'Show current date and time',
    execute(args, ctx) {
        ctx.addOutput(new Date().toString())
    }
}