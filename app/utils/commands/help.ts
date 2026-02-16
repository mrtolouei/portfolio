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
            formatCommand('github', 'Show my latest GitHub repositories and projects'),
            formatCommand('skills', 'List technical skills'),
            '',
            'System:',
            formatCommand('ascii', 'Convert text to ASCII art'),
            formatCommand('capitalize', 'Convert text to capitalize letters'),
            formatCommand('clear', 'Clear terminal output'),
            formatCommand('date', 'Show current date and time'),
            formatCommand('echo', 'Print text to the terminal'),
            formatCommand('help', 'Show this help message'),
            formatCommand('history', 'Show command history (optionally limit the number of entries)'),
            formatCommand('ip', 'Show your public IP and location info'),
            formatCommand('lowercase', 'Convert text to lowercase letters'),
            formatCommand('ping', 'Ping a domain or IP address and measure response time'),
            formatCommand('pwd', 'Print working directory'),
            formatCommand('quote', 'Show a random programming quote'),
            formatCommand('shutdown', 'Shutdown terminal'),
            formatCommand('sudo', 'Execute command as admin (if available)'),
            formatCommand('uppercase', 'Convert text to uppercase letters'),
            formatCommand('uptime', 'Show how long the terminal has been running'),
            formatCommand('weather', 'Show current weather for your location'),
            formatCommand('whoami', 'Show current user'),
        ]
        ctx.addOutput(lines.join('\n'))
    }
}
