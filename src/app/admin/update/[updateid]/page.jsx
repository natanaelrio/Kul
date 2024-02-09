import Header from '@/components/admin/layout/header';
import { GetListDataID } from "@/utils/admin/getListDataID";
import FormPage from '@/components/admin/layout/formPage';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

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
        <FormPage
          urlFetch={`/api/v1/admin/update?id=${getListDataID.data.id}`}
          method={'PUT'}
          data={getListDataID.data}
          change={' di Rubuah 😁'}
          value={false}
        />
      </Header>
    </>
  )
}




