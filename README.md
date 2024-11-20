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

1. Create a GitHub account (if you don’t already have one)
2. Create a Vercel account (if you don’t already have one)
3. Clone the starter repo: [Nebula](https://github.com/mstrials/Nebula)
4. Open in your code editor (VS Code recommended) and run:
```bash
npm install
```
5. Create `.env.local` file and add:
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
- Implement dynamic routing for individual blog posts when clicked on in the blogs page
- Full blog post display on click

### Buy
- Link to `/buy`
- Display random product with features and price
- Include checkout form
- Implement Stripe checkout page routing on form submission


## Submission Guidelines

Once completed:
1. Upload the project to your own GitHub account
2. Create a Vercel project to host your app
3. Respond to the initial email with:
   - Link to your GitHub repository
   - Your Vercel domain


