import type {Command} from "~/types/command";

export const pwd: Command = {
    name: 'pwd',
    description: 'Print working directory',
    execute(args, ctx) {
        ctx.addOutput('/home/visitor')
    }
}