"use client"
import { useSearchParams } from 'next/navigation'

export default function Nota({ id }) {
    const searchParams = useSearchParams()
    const transaction_status = searchParams.get('transaction_status')
    console.log(transaction_status)

    if (transaction_status == 'pending' || transaction_status == 'cancel'
        || transaction_status == 'deny' || transaction_status == 'expire') {
        return (
            <div>Coba Kembali, ulang!!!</div>
        )
    }
    else {
        return (
            <div>Notanya {id}</div>
        )
    }

}
