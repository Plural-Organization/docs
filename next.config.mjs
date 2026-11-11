import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // This app is mounted under plrl.host/docs as a Next.js "zone" next to the
  // marketing site (a separate deployment). assetPrefix keeps every static
  // asset under /docs/_next/... too, so the main site's single rewrite rule
  // for /docs/:path* also covers them. See:
  // node_modules/next/dist/docs/01-app/02-guides/multi-zones.md
  assetPrefix: '/docs',
  async redirects() {
    // Visiting this app's own domain directly (previews, the Vercel-assigned
    // URL) should still land on the docs, not a blank "/".
    return [
      {
        source: '/',
        destination: '/docs',
        permanent: false,
      },
    ];
  },
};

export default withMDX(config);
