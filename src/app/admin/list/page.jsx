import List from "@/components/admin/list"
import Header from '@/components/admin/layout/header';
import { GetListData } from "@/utils/admin/getListData";

export const metadata = {
    title: 'Admin LIST',
    description: 'Admin LIST',
}

export default async function Admin() {
    const getDataList = await GetListData()
    return (
        <>
            <Header judul={'LIST PRODUK'}>
                <List data={getDataList} />
            </Header>
        </>
    )
}
    