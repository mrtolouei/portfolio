import type {Command} from "~/types/command";

export const uppercase: Command = {
    name: 'uppercase',
    description: 'Convert text to uppercase letters',
    execute(args, ctx) {
        if (!args.length) {
            ctx.addOutput('Usage: uppercase &lt;text&gt;')
            return
        }
        ctx.addOutput(args.join(" ").toUpperCase())
    }
}