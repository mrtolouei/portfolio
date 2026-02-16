import type {Command} from "~/types/command";

const quotes = [
    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
    { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
    { text: "Knowledge is power.", author: "Francis Bacon" },
    { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
    { text: "Optimism is an occupational hazard of programming.", author: "Kent Beck" },
    { text: "When to use iterative development? You should use iterative development only on projects that you want to succeed.", author: "Martin Fowler" },
    { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { text: "Deleted code is debugged code.", author: "Jeff Sickel" },
    { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
    { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { text: "Programming isn’t about what you know; it’s about what you can figure out.", author: "Chris Pine" },
    { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
    { text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.", author: "Dan Salomon" },
    { text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
    { text: "Controlling complexity is the essence of computer programming.", author: "Brian Kernighan" },
    { text: "The function of good software is to make the complex appear to be simple.", author: "Grady Booch" },
    { text: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" },
    { text: "Walking on water and developing software from a specification are easy if both are frozen.", author: "Edward V Berard" },
    { text: "It’s not a bug — it’s an undocumented feature.", author: "Anonymous" },
    { text: "Software undergoes beta testing shortly before it’s released. Beta is Latin for ‘still doesn’t work.’", author: "Anonymous" },
    { text: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.", author: "Edsger Dijkstra" },
    { text: "There are two ways to write error-free programs; only the third one works.", author: "Alan J Perlis" },
    { text: "Weeks of coding can save you hours of planning.", author: "Anonymous" },
    { text: "Good code is its own best documentation.", author: "Steve McConnell" },
    { text: "The computer was born to solve problems that did not exist before.", author: "Bill Gates" },
    { text: "Software is a great combination between artistry and engineering.", author: "Bill Gates" },
    { text: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", author: "Bill Gates" },
    { text: "I don’t care if it works on your machine! We are not shipping your machine!", author: "Vidiu Platon" },
    { text: "The sooner you start to code, the longer the program will take.", author: "Roy Carlson" },
    { text: "Computers are fast; programmers keep it slow.", author: "Anonymous" },
    { text: "The best thing about a boolean is even if you are wrong, you are only off by a bit.", author: "Anonymous" },
    { text: "Programming is thinking, not typing.", author: "Casey Patton" },
    { text: "Clean code always looks like it was written by someone who cares.", author: "Robert C. Martin" },
    { text: "Truth can only be found in one place: the code.", author: "Robert C. Martin" },
    { text: "A language that doesn’t affect the way you think about programming is not worth knowing.", author: "Alan Perlis" },
    { text: "The best performance improvement is the transition from the nonworking state to the working state.", author: "J. Osterhout" },
    { text: "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.", author: "Mosher’s Law" },
    { text: "One man’s crappy software is another man’s full-time job.", author: "Jessica Gaston" },
    { text: "The purpose of software engineering is to control complexity, not to create it.", author: "Pamela Zave" },
    { text: "Programming is the art of algorithm design and the craft of debugging.", author: "Ellen Ullman" },
    { text: "Simplicity carried to an extreme becomes elegance.", author: "Jon Franklin" },
    { text: "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics.", author: "Norman Augustine" },
];

const recentIndexes: number[] = [];
const MAX_RECENT = 5;

export const quote: Command = {
    name: 'quote',
    description: 'Show a random programming quote',
    execute(args, ctx) {
        let index: number;
        let attempts = 0;
        do {
            index = Math.floor(Math.random() * quotes.length);
            attempts++;
        } while (recentIndexes.includes(index) && attempts < 10);
        recentIndexes.push(index);
        if (recentIndexes.length > MAX_RECENT) {
            recentIndexes.shift();
        }
        const q = quotes[index];
        if(!q) return ;
        ctx.addOutput(`“${q.text}” — ${q.author}`);
    }
}