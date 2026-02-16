import type {Command} from "~/types/command";

export const capitalize: Command = {
    name: 'capitalize',
    description: 'Convert text to capitalize letters',
    execute(args, ctx) {
        if (!args.length) {
            ctx.addOutput('Usage: capitalize &lt;text&gt;')
            return
        }
        const text = args.join(" ");
        const capitalized = text
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
        ctx.addOutput(capitalized)
    }
}