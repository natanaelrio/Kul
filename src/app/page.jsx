import ListProductMain from '@/components/listProductMain'
import HeaderFooter from '@/components/Layout/headerFooter'
import { Suspense } from 'react'
import Introduction from '@/components/introduction'

// import Todo from '@/components/todo'
// import RouteLoader from '@/components/cek';
// import Loading from '@/components/Loading';
// export const dynamic = 'force-dynamic'
// export const runtime = "edge"

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export const metadata = {
  title: 'Pusat Pembelian Gratis Ongkir',
  description: 'temukan hasil penjualan barang barang berkualitas',
  keywords: ['toko online', 'beli', 'belanja', 'baju', 'makanan'],
  authors: [{ name: 'Rio' }],
  creator: 'Rio',
  publisher: 'Rio',
  icons: {
    shortcut: ['/shortcut.png']
  },
}

export default function Home() {
  return (
    <>
      <HeaderFooter kondisiFalseSearch={true}>
        <Introduction />
        {/* <Todo /> */}
        <Suspense>
          <ListProductMain />
        </Suspense>
      </HeaderFooter>
    </>
  )
}
