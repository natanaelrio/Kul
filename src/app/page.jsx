import ListProduk from '@/components/listProduk'
import HeaderFooter from '@/components/Layout/headerFooter'
import Introduction from '@/components/introduction'
import { Suspense } from 'react'

// export const dynamic = 'force-dynamic'
// export const runtime = "edge"

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
      <HeaderFooter>
        {/* <Introduction /> */}
        <Suspense>
          <ListProduk />
        </Suspense>
      </HeaderFooter>
    </>
  )
}
