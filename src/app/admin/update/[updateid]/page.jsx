import Update from "@/components/admin/update"
import Header from '@/components/admin/layout/header';
import { GetListDataID } from "@/utils/admin/getListDataID";

export function generateMetadata({ params }) {
  // read route params
  const id = params.updateid
  return {
    title: `DATA ${id}`,
  }
}

export default async function Page({ params }) {
  const getListDataID = await GetListDataID(params.updateid)
  
  return (
    <>
      <Header judul={'UPDATE PRODUK'}>
        <Update data={getListDataID.data} />
      </Header>
    </>
  )
}




