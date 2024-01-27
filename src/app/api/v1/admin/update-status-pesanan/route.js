import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(databody) {
    const data = await prisma.formPembelian.update({
        where: {
            nota_user: databody.nota_user,
        },
        data: databody
    })
    return data
}


export async function PUT(req) {
    const { dataPesanan, status_pesanan, nota_user } = await req.json()
    const databody = { dataPesanan, status_pesanan, nota_user }
    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(databody)
    const res = await ResponseData(data, authorization)
    return res
}