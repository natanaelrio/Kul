import Payment from "@/components/payment";
import HeaderFooter from '@/components/Layout/headerFooter'

export const metadata = {
    title: 'Payment',
    description: 'Payment',
}

export default function PaymentPage() {
    return (
        <HeaderFooter kondisiFalseSearch={true} >
            <Payment />
        </HeaderFooter>
    )
}
