# Next Skeleton

This is a [Next.js](https://nextjs.org/) skeleton bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
npm install
cp .env.example .env
```

```bash
npm run dev
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

Update tailwind.config.ts with the project color scheme.

## Packages Used

- Next.js
- Typescript
- Tailwind CSS w/ plugins
- Clerk
- Prisma
- Axios
- React Icons
- React Hook Form
- Redux
- TipTap
- Postmark

## Prisma

Update `DATABASE_URL` in `.env` file

```bash
npx primsa init
```

```bash
npx primsa db pull
```

```bash
npx primsa db push
```

```bash
npx primsa generate
```

```bash
npx primsa studio
```

NOTE: studio command has been added to packages.json scripts

## Architecture

## Notes

- Changed default port from 3000 to 8000 to avoid conflicts with existing projects.
