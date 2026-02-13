import type { Command } from "~/types/command";
import type { CommandContext } from "~/types/commandContext";

const isIp = (value: string) => {
    const ipv4 =
        /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/
    const ipv6 = /^([a-f0-9:]+:+)+[a-f0-9]+$/i
    return ipv4.test(value) || ipv6.test(value)
}

const buildUrl = (target: string) => {
    if (isIp(target)) return target
    return `https://${target}`
}

export const ping: Command = {
    name: "ping",
    description: "Ping a domain or IP address and measure response time",
    execute: async (args: string[], ctx: CommandContext) => {
        const target = args[0];

        if (!target) {
            ctx.addOutput("Usage: ping <domain | ip>");
            return;
        }

        const url = buildUrl(target);

        const start = performance.now();
        try {
            await fetch(url, {
                method: "HEAD",
                mode: "no-cors",
            });
            const end = performance.now();
            const time = (end - start).toFixed(2);
            ctx.addOutput(`Ping to ${url}: ${time} ms`);
        } catch (e) {
            const end = performance.now();
            const time = (end - start).toFixed(2);
            ctx.addOutput(
                `Ping to ${url}: ${time} ms (may be blocked by CORS)`
            );
        }
    },
};
