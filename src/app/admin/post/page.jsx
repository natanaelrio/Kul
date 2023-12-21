import Kirim from '@/components/admin/kirim'
import Header from '@/components/admin/layout/header';

export const metadata = {
  title: 'Admin POST',
  description: 'Admin POST',
}

export default function Post() {
  return (
    <Header judul={'POST ADMIN'}>
      <Kirim />
    </Header>
  )
}
