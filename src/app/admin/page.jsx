import Login from '@/components/admin/login'
import Auth from '@/lib/Auth'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export const metadata = {
  title: 'Admin',
  description: 'Admin',
}

export default function LoginPage() {
  return (
    <Auth>
      <Login />
    </Auth>
  )
}
