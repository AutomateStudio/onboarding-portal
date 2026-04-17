import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Automate Onboarding Portal',
  description:
    'Premium onboarding portal for eCommerce store setup with AI-powered automation',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
