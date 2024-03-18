import ListProductMain from '@/components/listProductMain'
import HeaderFooter from '@/components/Layout/headerFooter'
import Produk from '@/components/produk'
import { GetListProductID } from '@/utils/user-front/getListProductID'
import { notFound } from 'next/navigation'
import { GetListProduct } from '@/utils/user-front/getListProduct'
import { GetListWarnaProductID } from '@/utils/user-front/getListWarnaProductID'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export async function generateMetadata({ params }) {

  const dataID = await GetListProductID(params.uid)
  return {
    title: `${dataID?.data?.nama_barang}` + `${dataID?.data?.warna_barang ? ' ( ' + dataID?.data?.warna_barang + ' )' : ''}`,
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
  const WarnaID = await GetListWarnaProductID(dataID?.data?.id_namabarang)
  const dataList = await GetListProduct()
  dataID.status == 500 ? notFound() : null

  return (
    <HeaderFooter data={dataID} slug={params.uid} kondisidetailproduk={true}>
      <Produk data={dataID} warnaID={WarnaID} />
      <ListProductMain data={dataList} kondisiProduk={false} />
    </HeaderFooter>
  )
}


