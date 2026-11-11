import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Plural';
export const docsRoute = '/docs';
// Everything below lives under /docs/* too, so a single rewrite on the main
// site (plrl.host/docs/:path*) covers the whole zone — see next.config.mjs.
export const docsImageRoute = '/docs/og/docs';
export const docsContentRoute = '/docs/llms.mdx/docs';

export const gitConfig = {
  user: 'Plural-Organization',
  repo: 'Plural',
  branch: 'main',
};

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
