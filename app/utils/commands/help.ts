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
            formatCommand('date', 'Show current date and time'),
            formatCommand('ip', 'Show your public IP and location info'),
            formatCommand('ping', 'Ping a domain or IP address and measure response time'),
            formatCommand('weather', 'Show current weather for your location'),
            formatCommand('uptime', 'Show how long the terminal has been running'),
            formatCommand('help', 'Show this help message'),
            formatCommand('clear', 'Clear terminal output'),
        ]

        ctx.addOutput(lines.join('\n'))
    }
}