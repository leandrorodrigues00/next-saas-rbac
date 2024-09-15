# Next.js SaaS + RBAC  

<br>

<p align="center">
  <a href="#-about-the-project">About the project</a> •
  <a href="#-technologies">Technologies</a> •
  <a href="#-getting-started">Getting started</a> •
  <a href="#-license">License</a>
</p>

<p align="center">
 
 
<img alt="project preview" src="./public/site-preview.png" width="75%"   >  
</p>

## 👩‍💻 About the project

 

## 🚀 Technologies
    
- [casl](https://casl.js.org/v6/en/)
- [dotenv-cli](https://github.com/venthur/dotenv-cli)
- [fastify](https://fastify.dev/)
- [ky](https://github.com/sindresorhus/ky)
- [NextJs v15](https://nextjs.org/)
- [Node.js](https://nodejs.org/pt)
- [postgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [React v19-RC](https://react.dev/blog/2024/04/25/react-19)
- [shadcn/ui](https://ui.shadcn.com/)
- [Swagger](https://swagger.io/)
- [Tailwind](https://tailwindcss.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [TurboRepo](https://turbo.build/)
- [Zod](https://github.com/colinhacks/zod)
 
## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)or [PNPM](https://pnpm.io/) _(examples are with PNPM)_
- [React v19-RC](https://react.dev/blog/2024/04/25/react-19)
- [postgreSQL](https://www.postgresql.org/) / [Docker](https://www.docker.com/)



**Clone the project and access the folder**

```bash
$ git clone https://github.com/leandrorodrigues00/next-saas-rbac && cd next-saas-rbac

```

**Follow the steps below**

To run the application, you will need to start the server in the `/apps/api` folder and the web application in the `/apps/web` folder.

```bash
# Install the dependencies in the root folder `/`
$ pnpm i

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
$ cp .env.example .env

# Use Docker to start the database. If needed, adjust the settings in the `/docker-compose.yml` file:
$  docker compose up 

# Navigate to the apps/api directory and run Prisma commands to set up the database schema and seed the database:
$ cd apps/api 
$ pnpm dlx prisma generate
$ pnpm run db:migrate
$ pnpm run db:seed

# Return to the root of the project and start the development server. TurboRepo will handle the build and start all necessary processes:
$ cd ../..  # Return to the root directory
$ pnpm run dev
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with 💜&nbsp; by  Leandro Rodrigues
</p>
