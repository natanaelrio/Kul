import midtransClient from 'midtrans-client'
import { ResponseData } from '@/lib/ResponseData'

let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.SERVER_MIDSTRANS,
    // clientKey: process.env.NEXT_PUBLIC_SECREET_MIDSTRANS
})

export async function POST(req) {
    const authorization = req.headers.get('authorization')
    const { order_id, item_details } = await req.json()
    let parameter = {
        "item_details": item_details.map((data) => ({
            "id": data.id,
            "price": data.price,
            "quantity": data.quantity,
            "name": data.name,
        })),
        "transaction_details": {
            "order_id": order_id,
            "gross_amount": item_details.map((data) => data.price * data.quantity).reduce((acc, curr) => acc + curr, 0)
        },
        "callbacks": {
            "finish": `${process.env.NEXT_PUBLIC_URL}/nota/` + `${order_id}`
        }
    }

    const token = await snap.createTransactionToken(parameter)
    const data = await ResponseData(token, authorization)
    return data
}