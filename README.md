# Next.js Trial Task

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview

Welcome to the trial task for Marketing Sweet. You will build a demo app that has a home page with an about us and blogs page. At the bottom there will be a contact button that displays a popup with a contact form and a buy now button that links to the /buy page. On this page you will connect Stripe and make successful test transactions.

## Naming Conventions

Please adhere to the following naming conventions:
- Pages/Folders and Components: `kebab-case`
- React Components: `PascalCase`
- Variables and Functions: `camelCase`
- Types and Interfaces: `PascalCase`
- Constants: `SCREAMING_SNAKE_CASE`

## Project Structure

Maintain a clear separation of concerns throughout the project:
- Use `/data`, `/lib`, `/utils`, `/components` at the root directory for shared files
- The app folder should only contain routes and `/api`
- Exception: Component folders within routes are acceptable when components are route-specific

## Setup Instructions

1. Clone the starter repo: [Nebula](https://github.com/mstrials/Nebula)
2. Open in your code editor (VS Code recommended) and run:
```bash
npm install
```
3. Create `.env.local` file and add:
   - Stripe keys (provided in initial email)
   - Google Maps API key (`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`)
     - Retrieve from Google Cloud Console > Keys & Credentials
     - Create Project and copy API key
     - Leave API unrestricted by selecting all in API list

## Project Resources
- Assets provided in `/public` folder
- Blog posts data in `/data`
- Custom Tailwind classes:
  - 'primary' and 'secondary' for color gradients
- Fonts:
  - `font-bebas-neue` for headings
  - `font-poppins` for sub-headings
  - `font-roboto` for all other text

## Pages to Build

### Home
- Follow design specifications

### About Us
- Follow design specifications

### Blog
- Display five latest blog posts from `/data/blogPosts.ts`
- Implement dynamic routing for individual blog posts
- Full blog post display on click

### Buy
- Link to `/buy`
- Display random product with features and price
- Include checkout form
- Implement Stripe checkout page routing on form submission

## Development Server

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy on Vercel

Deploy using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
