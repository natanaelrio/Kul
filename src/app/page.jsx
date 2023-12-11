import ListProduk from '@/components/listProduk'
import HeaderFooter from '@/components/Layout/headerFooter'
import Introduction from '@/components/introduction'

export const metadata = {
  title: 'Pusat Pembelanjaan Aneka Baju Berkualitas',
  description: 'temukan hasil baju murah dan berkualitas hanya di Tokorio.com',
}

export default function Home() {

  return (
    <>
      <HeaderFooter>
        <Introduction />
        <ListProduk />
      </HeaderFooter>
    </>
  )
}
