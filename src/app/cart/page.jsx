import Keranjang from '@/components/keranjang';
import HeaderFooter from '@/components/Layout/headerFooter'

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    // userScalable: false,
    // Also supported by less commonly used
    // interactiveWidget: 'resizes-visual',
  }

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
        <HeaderFooter>
            <Keranjang />
        </HeaderFooter>
    )
}
