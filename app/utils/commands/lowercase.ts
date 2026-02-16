import type {Command} from "~/types/command";

export const lowercase: Command = {
    name: 'lowercase',
    description: 'Convert text to lowercase letters',
    execute(args, ctx) {
        if (!args.length) {
            ctx.addOutput('Usage: lowercase &lt;text&gt;')
            return
        }
        ctx.addOutput(args.join(" ").toLowerCase())
    }
}