import type {Command} from "~/types/command";

export const shutdown: Command = {
    name: 'shutdown',
    description: 'Shutdown terminal',
    async execute(args, ctx) {
        await ctx.shutdown()
    }
}