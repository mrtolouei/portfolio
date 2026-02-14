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
            formatCommand('contact', 'Get in touch — view email and social links'),
            formatCommand('cv', 'Download my resume (PDF)'),
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
            formatCommand('echo', 'Print text to the terminal'),
            formatCommand('history', 'Show command history (optionally limit the number of entries)'),
            formatCommand('help', 'Show this help message'),
            formatCommand('clear', 'Clear terminal output'),
            formatCommand('shutdown', 'Shutdown terminal'),
        ]

        ctx.addOutput(lines.join('\n'))
    }
}