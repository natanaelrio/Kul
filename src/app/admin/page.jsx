import Login from '@/components/admin/login'

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
    <>
      <Login />
    </>
  )
}
