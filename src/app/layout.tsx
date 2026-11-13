import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter, Geist, Geist_Mono } from 'next/font/google';
import type { Metadata, Viewport } from 'next';

const siteUrl = new URL('https://plrl.host');
const title = 'Plural Docs · the shared room for your coding agent';
const description =
  'Learn how to install Plural, open a shared coding-agent room, bring teammates into one live session, and keep every write under the host’s control.';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: title,
    template: '%s · Plural Docs',
  },
  description,
  applicationName: 'Plural Docs',
  alternates: { canonical: '/docs' },
  icons: { icon: { url: '/favicon.svg', type: 'image/svg+xml' } },
  openGraph: {
    title,
    description,
    url: '/docs',
    siteName: 'Plural Docs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'dark',
  themeColor: '#08090a',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--next-font-sans',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--next-font-display',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--next-font-mono',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{ defaultTheme: 'dark' }}
          search={{ options: { api: '/docs/api/search' } }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
