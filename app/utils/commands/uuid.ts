import type { Command } from "~/types/command";

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const uuid: Command = {
    name: 'uuid',
    description: 'Generate a random UUID (version 4)',
    execute(args, ctx) {
        const id = generateUUID();
        ctx.addOutput(id);
    }
}
