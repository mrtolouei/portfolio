import type {Command} from "~/types/command";

export const help: Command = {
    name: 'help',
    description: 'Show available commands',
    execute(args, ctx) {
        const lines = [
            'Portfolio:',
            formatCommand('about', 'Show information about me'),
            formatCommand('contact', 'Get in touch — view email and social links'),
            formatCommand('cv', 'Download my resume (PDF)'),
            formatCommand('experiences', 'Show work experiences'),
            formatCommand('skills', 'List technical skills'),
            '',
            'System:',
            formatCommand('clear', 'Clear terminal output'),
            formatCommand('date', 'Show current date and time'),
            formatCommand('echo', 'Print text to the terminal'),
            formatCommand('help', 'Show this help message'),
            formatCommand('history', 'Show command history (optionally limit the number of entries)'),
            formatCommand('ip', 'Show your public IP and location info'),
            formatCommand('ping', 'Ping a domain or IP address and measure response time'),
            formatCommand('pwd', 'Print working directory'),
            formatCommand('shutdown', 'Shutdown terminal'),
            formatCommand('sudo', 'Execute command as admin (if available)'),
            formatCommand('uptime', 'Show how long the terminal has been running'),
            formatCommand('weather', 'Show current weather for your location'),
            formatCommand('whoami', 'Show current user'),
        ]
        ctx.addOutput(lines.join('\n'))
    }
}
