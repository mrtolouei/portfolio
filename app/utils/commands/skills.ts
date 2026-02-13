import type {Command} from "~/types/command";

export const skills: Command = {
    name: 'skills',
    description: 'List technical skills',
    execute(args, ctx) {
        ctx.addOutput(`Languages and Frameworks:
- PHP
- Laravel

Databases
- MySQL
- PostgreSQL
- Database Design and Optimization
- Indexing and Query Performance Tuning
- Transactions and Data Consistency

Caching and Messaging
- Redis <span class="text-gray-400">(Cache, Rate limit, Sessions)</span>
- RabbitMQ <span class="text-gray-400">(Asynchronous Processing, Message Queues, Event-Driven system)</span>

Search and Data Processing 
- Elasticsearch <span class="text-gray-400">(Full-text Search, Indexing, Performance Optimization)</span>

System Design
- Design Patterns <span class="text-gray-400">(Factory, Facade, Strategy, Decorator, Proxy, Chain of Responsibility, Builder, Adapter)</span>
- Domain-Driven Design <span class="text-gray-400">(DDD)</span>
- Monolithic Modular
- MicroService
- SAGA
- CQRS
- Circuit Breaker
- SOLID and Clean Code Principles 

DevOps and Performance
- Docker
- CI/CD Concepts
- Logging and Monitoring <span class="text-gray-400">(Graphana, Sentry, Telescope) </span>
- Deployment and Release strategy
`)
    }
}