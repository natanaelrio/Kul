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
    const { order_id, signature_key } = await req.json()
    if (signature_key && signature_key) {
        const data = await AmbilDataUsers(order_id)
        return data
    }
}