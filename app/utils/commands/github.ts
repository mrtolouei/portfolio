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
            `Laravel Service Health
<span class="text-gray-400">A Laravel package for monitoring the health of databases, Redis, queues, filesystems, and external HTTP services.</span>
<a href="https://github.com/mrtolouei/laravel-service-health" target="_blank" class="text-gray-500">-> https://github.com/mrtolouei/laravel-service-health</a>`,
            `Laravel Repository
<span class="text-gray-400">A clean and flexible base repository package for Laravel that simplifies data access, enforces the Repository Pattern, and keeps your application code organized, testable, and maintainable.</span>
<a href="https://github.com/mrtolouei/laravel-repository" target="_blank" class="text-gray-500">-> https://github.com/mrtolouei/laravel-repository</a>`,
        ]
        ctx.addOutput(lines.join('\n\n'))
    }
}