# Sterling Edge Ltd - Production Ready Website

This is a high-performance, mobile-first company website for **Sterling Edge Ltd**, built with React, Vite, Express, and Tailwind CSS.

## Features
- **Full-Stack Integration**: Express backend serves as an API proxy for ERPNext.
- **WhatsApp First**: Floating contact button and deep links throughout.
- **SEO Optimized**: Metadata, JSON-LD (LocalBusiness, Breadcrumbs), and semantic HTML.
- **Local Focus**: Content optimized for Stockport, Manchester, and Greater Manchester.
- **Responsive Design**: Modern, clean UI using Tailwind CSS 4.
- **Lead Capture**: Forms connected to a modular API layer ready for ERPNext.

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Copy `.env.example` to `.env` and fill in the details:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: Your business WhatsApp number (e.g., 447000000000).
   - `ERP_BASE_URL`: Your ERPNext instance URL.
   - `ERP_API_KEY` & `ERP_API_SECRET`: API credentials from ERPNext.

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## ERPNext Integration
The API layer is located in `server.ts` and `src/services/api.ts`. 
- `createLead()`: Sends website enquiries to ERPNext Lead doctype.
- `submitEnquiry()`: General contact form handling.

## SEO Content Kit
See `src/constants/seo-kit.ts` for:
- Meta titles and descriptions.
- Google Business Profile posts.
- FAQ items.
- Local keyword clusters.

## Deployment
This project is ready for **Vercel** or **GitHub** deployment.
- For Vercel: Ensure the `build` command is `npm run build` and the output directory is `dist`.
- For full-stack features on Vercel, you may need to adapt `server.ts` into Vercel Functions or use a separate backend.
