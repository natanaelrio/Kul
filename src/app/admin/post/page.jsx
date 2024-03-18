import FormPage from '@/components/admin/layout/formPage';
import Header from '@/components/admin/layout/header';
import Auth from '@/lib/Auth'
// import { GetIDnamabarang } from '@/utils/admin/getIDnamabarang';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export const metadata = {
  title: 'Admin POST',
  description: 'Admin POST',
}

export default async function Post() {
  // const data = await GetIDnamabarang()
  return (
    <Auth>
      <Header judul={'POST ADMIN'}>
        <FormPage
          urlFetch={'/api/v1/admin/post'}
          method={'POST'}
          // IDListdata={data?.data}
          change={' di Posting 😁'}
          value={true}
          submit={'Posting'}
        />
      </Header>
    </Auth>
  )
}
