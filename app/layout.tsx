import { Footer, Header } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    template: '%s | PosiJar',
    default: 'PosiJar',
  },
  description:
    'PosiJar is a platform to capture and celebrate daily moments of positivity. Join us to create your digital jar of happiness!',
  keywords: ['positivity', 'gratitude', 'mindfulness', 'journaling'],
  referrer: 'origin-when-cross-origin',
  generator: 'PosiJar',
  authors: [{ name: 'Paolo Bianchessi', url: 'https://github.com/paolo-05' }],
  creator: 'Paolo Bianchessi',
  publisher: 'PosiJar',
  formatDetection: {
    telephone: false,
    email: true,
  },
  metadataBase: new URL('https://posijar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PosiJar',
    description:
      'PosiJar is a platform to capture and celebrate daily moments of positivity. Join us to create your digital jar of happiness!',
    url: 'https://posijar.com',
    siteName: 'PosiJar',
    type: 'website',
    images: [
      {
        url: 'https://posijar.com/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PosiJar',
    description:
      'PosiJar is a platform to capture and celebrate daily moments of positivity. Join us to create your digital jar of happiness!',
    creator: '@BianchessiPaolo',
    images: ['https://posijar.com/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'flex flex-col bg-background font-sans antialiased',
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
