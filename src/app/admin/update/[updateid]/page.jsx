import Update from "@/components/admin/update"
import Header from '@/components/admin/layout/header';
import List from '@/components/admin/list';
import styles from '@/app/admin/update/[updateid]/page.module.css'

export function generateMetadata({ params }) {
  // read route params
  const id = params.updateid
  return {
    title: `DATA ${id}`,
  }
}

async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/getid?id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.NEXT_PUBLIC_SECREET
    },
    next: { revalidate: 0 }
  })
  return res.json()
}

export default async function Page({ params }) {
  const data = await getData(params.updateid)
  return (
    <>
      <Header judul={'UPDATE PRODUK'}>
        <Update data={data.data} />
        <div className={styles.judulatas}>
          <div className={styles.juduldalam}>
            List Produk
          </div>
        </div>
          <List />
      </Header>
    </>
  )
}



