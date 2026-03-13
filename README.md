# Juliette Floral Design Website

This repository contains the Next.js website for Juliette Floral Design.

## Overview

This site is the online presence for Juliette Floral Design, showcasing floral collections, featured products, and business contact information.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- PostCSS + Autoprefixer

## Project Structure

- `src/app/layout.tsx` Root layout, fonts, metadata, and global shell
- `src/app/globals.css` Tailwind directives and global base styles
- `src/app/page.tsx` Homepage
- `src/app/about/page.tsx` About page route (`/about`)
- `src/app/contact/page.tsx` Contact page route (`/contact`)
- `src/lib/components/navbar.tsx` Global navigation
- `src/lib/components/footer.tsx` Global footer
- `public/` Static assets (images, icons, etc.)

## Development

Install dependencies:

```bash
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install --prefix "c:\Users\allstarcode\Documents\Volta\juliette-floral"
```

Run locally:

```bash
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run dev --prefix "c:\Users\allstarcode\Documents\Volta\juliette-floral"
```

Preview URLs:

- `http://localhost:3000/`
- `http://localhost:3000/about`
- `http://localhost:3000/contact`

## Brand Details

- Business: Juliette Floral Design
- Tagline: Capturing Magic Through Flowers
- Address: 170 5th Ave, Brooklyn, NY 11217
- Email: juliettefloraldesign1@gmail.com
- Phone: 347-916-0013

## Content Update Checklist

- [ ] Replace emoji placeholders on homepage with real product/brand images
- [ ] Add missing linked routes (for example: `/pages/collections`, `/pages/events`, `/pages/plants`)
- [ ] Update SEO/Open Graph metadata in `src/app/layout.tsx`
- [ ] Add favicon and brand assets to `public/`
- [ ] Review footer credit text/link if needed

## Deployment (Vercel)

1. Push this project to a GitHub repository.
2. Go to Vercel and click `Add New...` -> `Project`.
3. Import the GitHub repository.
4. Keep default build settings:
	- Framework Preset: `Next.js`
	- Build Command: `next build`
	- Output Directory: `.next`
5. Click `Deploy`.

After deployment, Vercel will provide a production URL and preview URLs for each new commit.
