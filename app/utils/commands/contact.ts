import type {Command} from "~/types/command";
import {formatCommand} from "~/utils/formatCommand";

export const contact: Command = {
    name: 'contact',
    description: 'Get in touch — view email and social links',
    execute(args, ctx) {
        const lines = [
            formatCommand('Email', 'alitolouei.1997@gmail.com'),
            formatCommand('Linkedin', 'https://linkedin.com/in/mrtolouei'),
            formatCommand('GitHub', 'https://github.com/mrtolouei')
        ]
        ctx.addOutput(lines.join('\n'))
    }
}