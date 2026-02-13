import type {Command} from "~/types/command";

export const experiences: Command = {
    name: 'experiences',
    description: 'Show work experiences',
    execute(args, ctx) {
        ctx.addOutput(`Senior Software Engineer At Arian Capital (LAMARI)
<span class="text-gray-400">March 2025 - Present</span>
<span class="text-gray-400">Automotive Sales and After-Sales industry</span>

Software Engineer At Banino
<span class="text-gray-400">Jun 2024 - March 2025</span>
<span class="text-gray-400">Digital Marketplace (Laptop, Mobile and Electronics)</span>

Backend Developer At Keraseh
<span class="text-gray-400">March 2023 - Jun 2024</span>
<span class="text-gray-400">Online Financial and Accounting Solutions</span>

Backend Developer At ESRA
<span class="text-gray-400">May 2021 - March 2023</span>
<span class="text-gray-400">Research Organization</span>

Backend Developer At Arnikaware
<span class="text-gray-400">December 2019 - May 2021</span>
<span class="text-gray-400">Marketplace Platform</span>
`)
    }
}