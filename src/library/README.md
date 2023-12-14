# Next.js Library

These are components, utils, and other files that are common to all projects. These are designed to work without any changes to the underlining code but still allow you to do that if you need to.

## Notes

- All components expect you to be using Tailwind CSS. Make sure you have a structure similar to the `tailwind.config.example.ts` file.

## Init Steps

1. Install npm packages
2. Run `npx prisma init` to get Prisma setup
3. Add `.env` to `.gitignore` file
4. Update `.env` file to include Primsa database variable
5. Copy the `tailwind.config.example.ts` file to `tailwind.config.ts`
6. Go through the default icons in `lib.config.ts` and adjust them to the needs of your app
7. Set up your data structure in the `prisma` directory

### NPM Install Script

**Default npm packages**

```
npm install @mdi/js @mdi/react @prisma/client axios prisma prisma-json-types-generator react-hook-form swr
```

```
npm install --save-dev @tailwindcss/forms @tailwindcss/typography ts-node
```

**Editor npm packages**

```
npm install @tiptap/extension-focus @tiptap/extension-link @tiptap/extension-placeholder @tiptap/extension-text-align @tiptap/extension-typography @tiptap/extension-underline @tiptap/pm @tiptap/react @tiptap/starter-kit
```

### Icons

Icons use [Material Design Icons](https://pictogrammers.com/library/mdi/). This is a free icon library with a lot of options.

They have two first-party React packages. The first one takes an SVG path and displays the icon. The second one gives SVG paths for all their icons.

In the `lib.config.ts` file you'll need to add to the icons object the icons you want to use in your app.

## Recommended App Structure

```
├── components
├── enums
├── forms
├── hooks
├── layout
├── library
├── pages (required by Next.js)
├── services (optional)
├── styles
└── types
```
