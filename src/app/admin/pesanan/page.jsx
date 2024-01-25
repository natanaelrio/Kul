import Header from '@/components/admin/layout/header';
import Pesanan from '@/components/admin/pesanan';
import { GetListDataPesanan } from '@/utils/admin/getListDataPesanan';

export default async function PesananMain() {
    const data = await GetListDataPesanan()
    return (
        <Header judul={'Pesanan'}>
            <Pesanan data={data} />
        </Header>
    )
}
