import List from "@/components/admin/list"
import Header from '@/components/admin/layout/header';

export const metadata = {
    title: 'Admin LIST',
    description: 'Admin LIST',
}

export default async function Admin() {
    return (
        <>
            <Header judul={'LIST PRODUK'}>
                <List />
            </Header>
        </>
    )
}
