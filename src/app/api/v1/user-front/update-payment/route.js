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


export async function PUT(req) {
    const { nota_user } = await req.json()
    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(nota_user)
    const res = await ResponseData(data, authorization)
    return res
}