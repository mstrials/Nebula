# Next.js Trial Task

## Project Overview

Welcome to the trial task for Marketing Sweet. You will build a demo app that has a home page with an about us and blogs page. At the bottom there will be a contact button that displays a popup with a contact form and a buy now button that links to the /buy page. On this page you will connect Stripe and make successful test transactions. Ensure the app is responsive and works on mobile devices. All buttons should follow the gradient Tailwind style bg-gradient-to-r from-[#FF8C37] to-[#FF3366]. Set this as a custom theme colour in tailwind.config.ts. Refer to the 'screens' folder in the root of the project for screenshots of how the app should look.

The tech stack is Next.js 14 with the app router, TypeScript, Tailwind CSS, and Stripe.

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
4. Open in your code editor (Cursor AI recommended) and run:
```bash
npm install
```
5. Create `.env.local` file and add:
   - Stripe keys (Make your own account for test purchases)
   - Google Maps API key (Make your own account and use the free quota)
     - Retrieve from Google Cloud Console > Keys & Credentials
     - Create Project and copy API key
     - Leave API unrestricted by selecting all in API list

## Project Resources
- Assets provided in `/public` folder
- Blog posts data in `/data`
- Fonts:
  - `font-bebas-neue` for headings
  - `font-poppins` for sub-headings
  - `font-roboto` for all other text

## Pages to Build

### Home
- Design a left aligned H1 with the heading 'Nebula'
- Underneath, display two paragraphs of lorem ipsum text
- Thirdly place two widgets that are a square with an image inside and a heading below. These will be the 'About Us' and 'Blog' widgets.
- Finally, place two buttons below that are rounded and follow the color gradient. Make the first button 'Contact Us' and the second button 'Buy Now'. The contact button will display a popup with a contact form with the fields: name, email, message, street number, street name, suburb, state, postcode and a submit button. There should be an address field where you can start typing the address and the Google Maps API will autocomplete the address. Simply console.log the form data on submit. The buy now button will link to the `/buy` page.

### About Us
- Start with a banner image at the top with a H1 over it that says 'About Us'
- Then have an image on the right with a section containing a heading and a a paragraph to the right of it.
- Follow this text/image section two more times while having the text and the image sides alternate.
- At the bottom of the page, create a call to action section. This should contain a heading, a paragraph, and a button that says 'Contact Us'. When clicked, it should display the contact form popup.

### Blog
- Display five latest blog posts from `/data/blogPosts.ts`
- Implement dynamic routing for individual blog posts when clicked on in the blogs page
- Full blog post display on click following dynamic route

### Buy
- Link to `/buy`
- Display random product with features and price
- Include checkout form
- Implement Stripe checkout page routing on form submission

### Thank You
- Display a thank you message after successful purchase


## Submission Guidelines

You'll have 24 hours from receiving this task to complete it. Once completed:
1. Upload the project to your own GitHub account
2. Create a Vercel project to host your app
3. Respond to the initial email with:
   - Link to your GitHub repository
   - Your Vercel domain


