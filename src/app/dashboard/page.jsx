import ListProduk from '@/components/listProduk'
import HeaderFooter from '@/components/Layout/headerFooter'
import Produk from '@/components/produk'

export default function Dashboard() {
  return (
    <>
      <HeaderFooter>
        <Produk />
        <ListProduk />
      </HeaderFooter>
    </>
  )
}
