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
import {ip} from "~/utils/commands/ip";
import {ping} from "~/utils/commands/ping";
import {weather} from "~/utils/commands/weather";
import {uptime} from "~/utils/commands/uptime";
import {contact} from "~/utils/commands/contact";
import {cv} from "~/utils/commands/cv";
import {echo} from "~/utils/commands/echo";
import {history} from "~/utils/commands/history";
import {shutdown} from "~/utils/commands/shutdown";
import {github} from "~/utils/commands/github";
import {quote} from "~/utils/commands/quote";
import {ascii} from "~/utils/commands/ascii";

export const commands: Record<string, Command> = {
    help,
    '?': help,
    clear,
    date,
    pwd,
    whoami,
    sudo,
    about,
    skills,
    experiences,
    ip,
    ping,
    weather,
    uptime,
    contact,
    cv,
    echo,
    history,
    shutdown,
    github,
    quote,
    ascii,
}

export const commandNames = Object.keys(commands)
