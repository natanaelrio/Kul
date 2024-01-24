import ListProductMain from '@/components/listProductMain'
import HeaderFooter from '@/components/Layout/headerFooter'
import Produk from '@/components/produk'
import { GetListProductID } from '@/utils/user-front/getListProductID'
import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { GetListProduct } from '@/utils/user-front/getListProduct'
import SkletonList from '@/components/skletonList'
import SkletonProdukID from '@/components/skletonProdukID'

export async function generateMetadata({ params }) {

  const dataID = await GetListProductID(params.uid)
  return {
    title: `${dataID?.data?.nama_barang}`,
    description: `${dataID?.data?.diskripsi_barang}`,
    category: `${dataID?.data?.kategori_barang}`,
    keywords: [dataID?.data?.tag_barang],
    authors: [{ name: 'Rio' }],
    creator: 'Rio',
    publisher: 'Rio',
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}/products/${dataID?.data?.slug_barang}`),
    alternates: {
      canonical: '/'
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      shortcut: ['/shortcut.png']
    }
  }
}

export default async function Products({ params }) {
  const dataID = await GetListProductID(params.uid)
  const dataList = await GetListProduct()
  dataID.status == 404 ? notFound() : null

  return (
    <HeaderFooter kondisiFalseSearch={true} data={dataID} slug={params.uid}>
      <Suspense fallback={<SkletonProdukID />}>
        <Produk data={dataID} />
      </Suspense>
      <Suspense fallback={<SkletonList />}>
        <ListProductMain data={dataList} />
      </Suspense>
    </HeaderFooter>
  )
}


