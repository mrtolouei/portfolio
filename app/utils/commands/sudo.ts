import type {Command} from "~/types/command";

export const sudo: Command = {
    name: 'sudo',
    description: 'Show current date and time',
    execute(args, ctx) {
        ctx.addOutput('sudo: sorry, visitor is not allowed to execute commands as root.')
    }
}