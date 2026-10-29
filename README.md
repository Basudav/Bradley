# Bradley's Window Cleaning

A front-end marketing website for Bradley's Window Cleaning, built with Next.js 15, React 19, TypeScript and Tailwind CSS.

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**

   Copy `.env.example` to `.env.local` and update the site URL:

   ```bash
   cp .env.example .env.local
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**

   ```bash
   npm run build
   npm start
   ```

## Replacing Placeholders

- **Images:** Add your photos to the `public/images/` folders. See `public/images/README.md` for expected file names, sizes and alt text.
- **Logo:** Place your logo at `public/images/brand/logo.png` (512×512) and update `siteConfig.assets.logo` in `src/config/site.ts`.
- **Facebook URL:** Add your Facebook page URL to `siteConfig.social.facebookUrl` in `src/config/site.ts`.
- **Postcode:** Add your postcode to `siteConfig.address.postalCode` in `src/config/site.ts`.
- **Domain:** Update `NEXT_PUBLIC_SITE_URL` in your `.env.local` file.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, static rendering)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [Tailwind CSS 3.4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/) for icons
- [Google Fonts](https://fonts.google.com/) via `next/font` (Fredoka + Lexend)
