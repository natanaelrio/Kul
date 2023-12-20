import Update from "@/components/admin/update"
import Header from '@/components/admin/layout/header';
import ListProduk from '@/components/admin/listproduk';
// export const metadata = {
//   title: 'Admin UPDATE',
//   description: 'Admin UPDATE',
// }

export function generateMetadata({ params }) {
  // read route params
  const id = params.updateid
  return {
    title: `DATA ${id}`,
  }
}


export default function Page({ params }) {
  return (
    <>
      <Header judul={'UPDATE PRODUK'}>
        <Update id={params.updateid} />
        <ListProduk />
      </Header>
    </>
  )
}



