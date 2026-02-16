import type {Command} from "~/types/command";

const quotes = [
    {
        text: "Programs must be written for people to read, and only incidentally for machines to execute.",
        author: "Harold Abelson",
    },
    {
        text: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman",
    },
    {
        text: "First, solve the problem. Then, write the code.",
        author: "John Johnson",
    },
    {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler",
    },
    {
        text: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds",
    },
];

export const quote: Command = {
    name: 'quote',
    description: 'Show a random programming quote',
    execute(args, ctx) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        if (!randomQuote) return;
        ctx.addOutput(`“${randomQuote.text}” — ${randomQuote.author}`);
    }
}