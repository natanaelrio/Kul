import List from "@/components/admin/list"
import Header from '@/components/admin/layout/header';

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    // userScalable: false,
    // Also supported by less commonly used
    // interactiveWidget: 'resizes-visual',
}

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
