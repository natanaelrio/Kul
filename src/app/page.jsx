import ListProductMain from '@/components/listProductMain'
import HeaderFooter from '@/components/Layout/headerFooter'
import { Suspense } from 'react'
import Introduction from '@/components/introduction'
import SkletonList from '@/components/skletonList'
import { GetListProduct } from '@/utils/user-front/getListProduct'

// import RouteLoader from '@/components/cek';
// import Loading from '@/components/Loading';
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

export default async function Home() {
  const data = await GetListProduct()
  return (
    <>
      <HeaderFooter kondisiFalseSearch={true}>
        <Introduction />
        <Suspense fallback={<SkletonList />}>
          <ListProductMain data={data} />
        </Suspense>
      </HeaderFooter>
    </>
  )
}
