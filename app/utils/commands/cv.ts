import type {Command} from "~/types/command";

export const cv: Command = {
    name: "cv",
    description: "Download my resume (PDF)",
    execute(args, ctx) {
        ctx.addOutput('Downloading resume...')
        const link = document.createElement("a");
        link.href = "/my-cv.pdf";
        link.download = "Alireza-Tolouei-CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },
};