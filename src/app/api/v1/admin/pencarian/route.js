import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(cari) {
    const data = await prisma.admin.findMany({
        where: {
            nama_barang: {
                contains: cari,
                mode: 'insensitive'
            },
        },
    })
    return data
}


export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const cari = searchParams.get('cari');
    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(cari)
    const res = await ResponseData(data, authorization)
    return res
}