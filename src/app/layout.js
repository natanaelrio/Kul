
import './globals.css'
// import NextTopLoader from 'nextjs-toploader';
// import RouteLoader from '@/components/cek';
// import { Kocak } from '@/components/cek';

export default function RootLayout({ children }) {

  return (
    <>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </>
  )
}