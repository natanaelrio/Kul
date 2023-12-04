
import PencarianProvider from '@/context/pencarianProvider'
import './globals.css'

export const metadata = {
  title: 'Jual Hasil Pertanian | Tokorio',
  description: 'temukan hasil pertanian murah dan berkualitas hanya di Tokorio.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PencarianProvider>
          {children}
        </PencarianProvider>
      </body>
    </html>
  )
}
