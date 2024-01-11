import FormPage from '@/components/admin/layout/formPage';
import Header from '@/components/admin/layout/header';

export const metadata = {
  title: 'Admin POST',
  description: 'Admin POST',
}

export default function Post() {
  return (
    <Header judul={'POST ADMIN'}>
      <FormPage
        urlFetch={'/api/v1/admin/post'}
        method={'POST'}
        change={' di Posting 😁'}
        value={true}
      />
    </Header>
  )
}
