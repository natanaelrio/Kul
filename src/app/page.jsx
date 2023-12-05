import ListProduk from '@/components/listProduk'
import HeaderFooter from '@/components/Layout/headerFooter'
import Introduction from '@/components/introduction'
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
