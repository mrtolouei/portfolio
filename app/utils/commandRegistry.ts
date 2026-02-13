import type {Command} from "~/types/command";
import {help} from "~/utils/commands/help";
import {clear} from "~/utils/commands/clear";
import {date} from "~/utils/commands/date";
import {about} from "~/utils/commands/about";
import {skills} from "~/utils/commands/skills";
import {pwd} from "~/utils/commands/pwd";
import {whoami} from "~/utils/commands/whoami";
import {sudo} from "~/utils/commands/sudo";
import {experiences} from "~/utils/commands/experiences";
export const commands: Record<string, Command> = {
    help,
    clear,
    date,
    pwd,
    whoami,
    sudo,
    about,
    skills,
    experiences
}