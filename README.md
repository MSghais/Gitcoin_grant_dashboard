# Turborepo starter

This is an official pnpm starter turborepo.

## What's inside?

Gitcoin Dashboard for grantees.
Gitcoin grant round for this Dashboard https://explorer.gitcoin.co/#/round/10/0xa20a0fdec6506667e90668300b0c88d9ae8670ae

Available: https://gitcoin-grant-dashboard.wuw-whateveryouwant.xyz

The dashboard:

Send project grant round information.
Receive a list of donors with the amount, address, ens name, votes number, and date.
Get round application details.

TODO:
Would love to have more, filter by amount, data, votes.
Grantees dashboard for donors.
Rounds pages.

Let me know what you want!

Build by :  https://twitter.com/MSG_Encrypted
Founder of : https://twitter.com/WUW_WhtevrUWant



# Eligibility Requirements:
1. User can enter project ID via a text box
2. When valid project ID is entered, the dashboard returns the following data:
- List of donors (by wallet address and ENS if available) 
- Amount of donation (native token and USD equivalent) 
- Which round the donation occurred in (text/name) 
- Date of donation

3. If invalid project ID entered, display error state
4. This dashboard should be maintained for the next 30 days. Possibility of extending with coordination w Gitcoin team. Gitcoin team is able to promote and send this dashboard around where helpful to the community.

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

- [Docker Compose](https://docs.docker.com/compose/) for local database

### Database

We use [Prisma](https://prisma.io/) to manage & access our database. As such you will need a database for this project, either locally or hosted in the cloud.

To make this process easier, we offer a [`docker-compose.yml`](https://docs.docker.com/compose/) file to deploy a MySQL server locally with a new database named `turborepo` (To change this update the `MYSQL_DATABASE` environment variable in the `docker-compose.yml` file):

```bash
cd my-turborepo
docker-compose up -d
```

Once deployed you will need to copy the `.env.example` file to `.env` in order for Prisma to have a `DATABASE_URL` environment variable to access.

```bash
cp .env.example .env
```

If you added a custom database name, or use a cloud based database, you will need to update the `DATABASE_URL` in your `.env` accordingly.

Once deployed & up & running, you will need to create & deploy migrations to your database to add the necessary tables. This can be done using [Prisma Migrate](https://www.prisma.io/migrate):

```bash
npx prisma migrate dev
```

If you need to push any existing migrations to the database, you can use either the Prisma db push or the Prisma migrate deploy command(s):

```bash
yarn run db:push

# OR

yarn run db:migrate:deploy
```

There is slight difference between the two commands & [Prisma offers a breakdown on which command is best to use](https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push#choosing-db-push-or-prisma-migrate).

An optional additional step is to seed some initial or fake data to your database using [Prisma's seeding functionality](https://www.prisma.io/docs/guides/database/seed-database).

To do this update check the seed script located in `packages/database/src/seed.ts` & add or update any users you wish to seed to the database.

Once edited run the following command to run tell Prisma to run the seed script defined in the Prisma configuration:

```bash
yarn run db:seed
```

For further more information on migrations, seeding & more, we recommend reading through the [Prisma Documentation](https://www.prisma.io/docs/).

## Using this example

Run the following command:

```sh
npx degit vercel/turbo/examples/with-prisma with-prisma
cd with-prisma
yarn install
git init . && git add . && git commit -m "Init"
```

### Build

To build all apps and packages, run the following command:

```bash
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```bash
yarn run dev
```

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
docker-compose up -d
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpm dlx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
