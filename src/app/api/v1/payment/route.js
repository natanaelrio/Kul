import { prisma } from "@/lib/prisma"
import { sha512, sha384, sha512_256, sha512_224 } from 'js-sha512';

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
    const { order_id, status_code, gross_amount, signature_key } = await req.json()
    const sh512 = sha512(order_id + status_code + gross_amount + process.env.SERVER_MIDSTRANS)
    if (sh512 && signature_key) {
        const data = await AmbilDataUsers(order_id)
        return data
    }
}