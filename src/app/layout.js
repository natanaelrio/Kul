'use client';
import PencarianProvider from '@/context/pencarianProvider'
import './globals.css'
import NextNProgress from 'nextjs-progressbar';
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader />
        <NextNProgress color="#ffb700" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
        <PencarianProvider>
          {children}
        </PencarianProvider>
      </body>
    </html>
  )
}
