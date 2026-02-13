import type {Command} from "~/types/command";

export const help: Command = {
    name: 'help',
    description: 'Show available commands',
    execute(args, ctx) {
        const lines = [
            'Portfolio:',
            formatCommand('about', 'Show information about me'),
            formatCommand('skills', 'List technical skills'),
            formatCommand('experiences', 'Show work experiences'),
            '',
            'System:',
            formatCommand('whoami', 'Show current user'),
            formatCommand('pwd', 'Print working directory'),
            formatCommand('sudo', 'Execute command as admin (if available)'),
            formatCommand('help', 'Show this help message'),
            formatCommand('clear', 'Clear terminal output'),
            '',
            'Tools:',
            formatCommand('date', 'Show current date and time'),
        ]

        ctx.addOutput(lines.join('\n'))
    }
}