import type {CommandContext} from "~/types/commandContext";

export interface Command {
    name: string
    description: string
    execute: (args: string[], ctx: CommandContext) => void
}