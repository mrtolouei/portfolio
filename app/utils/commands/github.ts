import type {Command} from "~/types/command";
import {formatCommand} from "~/utils/formatCommand";

export const github: Command = {
    name: 'github',
    description: 'Show my latest GitHub repositories and projects',
    execute(args, ctx) {
        const lines = [
            `Laravel Math Captcha
<span class="text-gray-400">A stateless, lightweight math-based CAPTCHA package for Laravel that generates a simple arithmetic challenge as an image and verifies it via signed payloads. No database, cache, or filesystem is required.</span>
<a href="https://github.com/mrtolouei/laravel-math-captcha" target="_blank" class="text-gray-500">-> https://github.com/mrtolouei/laravel-math-captcha</a>`,
            `Laravel Service Health Monitor
<span class="text-gray-400">A lightweight, extendable Laravel package for monitoring the health of internal services like Database, Redis, Queue, Cache, Filesystem, and any third-party APIs.</span>
<a href="https://github.com/mrtolouei/laravel-health-monitor" target="_blank" class="text-gray-500">-> https://github.com/mrtolouei/laravel-health-monitor</a>`,
            `Laravel Repository Pattern
<span class="text-gray-400">A clean and flexible base repository package for Laravel that simplifies data access, enforces the repository pattern, and keeps your code organized and testable.</span>
<a href="https://github.com/mrtolouei/laravel-repo-mate" target="_blank" class="text-gray-500">-> https://github.com/mrtolouei/laravel-repo-mate</a>`,
        ]
        ctx.addOutput(lines.join('\n\n'))
    }
}