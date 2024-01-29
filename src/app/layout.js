import './globals.css'
import 'nprogress/nprogress.css'

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