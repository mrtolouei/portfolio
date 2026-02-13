import type { Command } from "~/types/command";
import type { CommandContext } from "~/types/commandContext";

export const ip: Command = {
    name: "ip",
    description: "Show your public IP and location info",
    execute: async (_args: string[], ctx: CommandContext) => {

        ctx.addOutput("Fetching IP information ...")

        try {
            const res = await fetch("https://ipapi.co/json/")
            if (!res.ok) throw new Error("Failed to fetch IP info")

            const data = await res.json()

            ctx.addOutput(`
IP Address : ${data.ip}
City       : ${data.city}
Region     : ${data.region}
Country    : ${data.country_name}
Postal     : ${data.postal}
Org        : ${data.org}
Timezone   : ${data.timezone}
            `)

        } catch (err: any) {
            ctx.addOutput(`Failed to get IP info: ${err.message || err}`)
        }
    },
}
