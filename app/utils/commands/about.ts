import type {Command} from "~/types/command";

export const about: Command = {
    name: 'about',
    description: 'Show information about me',
    execute(args, ctx) {
        ctx.addOutput(`Hi. I'm Alireza Tolouei,
A Senior Software Engineer with extensive experience designing, building, and scaling complex, business-critical systems. 
Specialized in PHP & Laravel, with strong expertise in MySQL, PostgreSQL, MongoDB, Redis, Elasticsearch, Docker, and RabbitMQ. 
Experienced in developing marketplace platforms, real estate contract management systems, web-based accounting software, and automotive sales & after-sales solutions. 
Strong background in system design, DDD, modular monolithic and microservices architectures, with a focus on clean, maintainable code and scalable, production-ready systems.
`)
    }
}