import ListProduk from '@/components/listProduk'
import HeaderFooter from '@/components/Layout/headerFooter'
import Produk from '@/components/produk'
import { GetProducts } from '@/utils/user-front/getproducts'
import { Suspense } from 'react'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const data = await GetProducts(params.uid)
  return {
    title: `${data?.data?.nama_barang}`,
    description: `${data?.data?.diskripsi_barang}`,
    category: `${data?.data?.kategori_barang}`,
    keywords: [data?.data?.tag_barang],
    authors: [{ name: 'Rio' }],
    creator: 'Rio',
    publisher: 'Rio',
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}/products/${data?.data?.slug_barang}`),
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
  const data = await GetProducts(params.uid)
  data.status == 404 ? notFound() : null

  return (
    <>
      <HeaderFooter>
        <Suspense>
          <Produk data={data} />
        </Suspense>
          <ListProduk />
      </HeaderFooter>
    </>
  )
}


