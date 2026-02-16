import type { Command } from "~/types/command"
import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard.js";

export const ascii: Command = {
    name: "ascii",
    description: "Convert text to ASCII art",
    execute(args, ctx) {
        const text = args.join(" ").trim();
        if (!text) {
            ctx.addOutput('Usage: ascii "text"');
            return;
        }
        if (text.length > 20) {
            ctx.addOutput("Text too long (max 20 characters)");
            return;
        }
        try {
            figlet.parseFont("Standard", standard);
            const result = figlet.textSync(text, {
                font: "Standard",
            });
            ctx.addOutput(`<pre>${result}</pre>`);
        } catch (err) {
            ctx.addOutput("Failed to generate ASCII art");
        }
    },
}
