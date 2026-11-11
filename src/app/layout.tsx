import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter, Geist, Geist_Mono } from 'next/font/google';

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
