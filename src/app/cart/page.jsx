import Keranjang from '@/components/keranjang';
import HeaderFooter from '@/components/Layout/headerFooter'

export default function CartNota() {
    return (
        <HeaderFooter kondisiFalseSearch={true}>
           <Keranjang />
        </HeaderFooter>
    )
}
