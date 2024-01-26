import Keranjang from '@/components/keranjang';
import HeaderFooter from '@/components/Layout/headerFooter'

export const metadata = {
    title: 'Keranjang',
    description: 'Keranjang',
    keywords: ['toko online', 'beli', 'belanja', 'baju', 'makanan', 'keranjang'],
    authors: [{ name: 'Rio' }],
    creator: 'Rio',
    publisher: 'Rio',
    icons: {
        shortcut: ['/shortcut.png']
    },
}

export default function CartNota() {
    return (
        <HeaderFooter kondisiFalseSearch={true}>
            <Keranjang />
        </HeaderFooter>
    )
}
