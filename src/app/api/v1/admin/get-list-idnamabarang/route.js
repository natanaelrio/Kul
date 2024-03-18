import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers() {
    const data = await prisma.admin.findMany({
        select: {
            id_namabarang: true,
        },
        distinct: ['id_namabarang'],
        where: { NOT: [{ id_namabarang: null }] }
    })

    return data
}


export async function GET(req) {
    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers()
    const res = await ResponseData(data, authorization)
    return res
}