# Flink Test

A Next.js project with React, TypeScript, and Contentful CMS integration.

## Features

- Next.js v14.1.0
- React v18.3.0
- TypeScript v5.3.3
- Contentful CMS integration
- TailwindCSS v3.4.1
- Storybook for component development
- Jest for testing
- Million.js for performance optimization

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Setup

Copy the `.env.local.example` file to `.env.local` and fill in your Contentful credentials:

```bash
cp .env.local.example .env.local
```

## Available Scripts

- `pnpm dev` - Run development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run Jest tests
- `pnpm storybook` - Start Storybook server
- `pnpm generate-types` - Generate TypeScript types from Contentful
- `pnpm vite:dev` - Run development server with Vite
- `pnpm vite:build` - Build for production with Vite