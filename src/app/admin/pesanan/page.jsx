import Header from '@/components/admin/layout/header';
import Pesanan from '@/components/admin/pesanan';
import { GetListDataPesanan } from '@/utils/admin/getListDataPesanan';

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    // Also supported by less commonly used
    // interactiveWidget: 'resizes-visual',
}

export const metadata = {
    title: 'Pesanan Admin',
    description: 'Pesanan Admin',
}

export default async function PesananMain() {
    const data = await GetListDataPesanan()
    return (
        <Header judul={'Pesanan'}>
            <Pesanan data={data} />
        </Header>
    )
}
