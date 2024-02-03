import Payment from "@/components/payment";
import HeaderFooter from '@/components/Layout/headerFooter'

export default function PaymentPage() {
    return (
        <HeaderFooter kondisiFalseSearch={true} >
            <Payment />
        </HeaderFooter>
    )
}
