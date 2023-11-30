# SaaS Skeleton

This is a [Next.js](https://nextjs.org/) skeleton bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The goal of this project is to accelerate new project development by having an existing code base that has all low-level functionality already built.

This will be a living project and be updated as new ideas and improvements are discovered.

## Getting Started

```bash
npm install
cp .env.example .env
```

### Required Packages

```bash
npm install prisma @prisma/client prisma-json-types-generator axios react-hook-form react-icons swr
```

```bash
npm install -D @tailwindcss/forms @tailwindcss/typography ts-node
```

### Optional Packages

```bash
npm install @tiptap/starter-kit @tiptap/react @tiptap/pm @tiptap/extension-focus @tiptap/extension-link @tiptap/extension-placeholder @tiptap/extension-text-align @tiptap/extension-typography @tiptap/extension-underline
```

```bash
npm install react-redux @redux/toolkit
```

```bash
npm install @clerk/nextjs
```

```bash
npm install postmark
```

### Run App

```bash
npm run dev
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

Update tailwind.config.ts with the project color scheme.

## Packages Used

- [Next.js]()
- [Typescript]()
- [Tailwind CSS]()
- [Clerk]()
- [Prisma]()
- [Axios]()
- [React Icons]()
- [React Hook Form]()
- [Redux]()
- [TipTap]()
- [Postmark]()

## Prisma

Update `DATABASE_URL` in `.env` file

```bash
npx prisma init
```

```bash
npx prisma db pull
```

```bash
npx prisma db push
```

```bash
npx prisma seed
```

```bash
npx prisma generate
```

```bash
npx prisma studio
```

**NOTE**: studio command has been added to packages.json scripts

## Architecture

### Components

#### - Editor

A WYSIWYG Editor built on TipTap and ready to use in any React app.

#### - Layout

These components are used in the shell layout of the whole app

#### - Library

These are the building block components used throughout the app

### Enums

Enums are created in the `enums` directory and should be registered in the `index.ts` file so that they can be used from a single enums variable.

### Features

This is for app features

### Services

The various services that can be used throughout the app and don't warrant a custom hook. Typically these will integrate with external services or formatting coding.

## Notes

- Changed default port from 3000 to 8000 to avoid conflicts with existing projects.
