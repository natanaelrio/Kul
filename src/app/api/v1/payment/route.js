import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(nota_user) {
    const data = await prisma.formPembelian.update({
        where: {
            nota_user: nota_user,
        },
        data: {
            payment: true
        }
    })
    return data
}


export async function POST(req) {
    const { order_id } = await req.json()
    console.log(order_id)
    // const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(order_id)
    // const res = await ResponseData(data, authorization)
    return data
}