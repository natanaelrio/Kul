import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers() {
    const data = await prisma.admin.findMany({
        select: {
            id: true,
            nama_barang: true,
            harga_barang: true,
        },
        orderBy:
            { id: 'desc' },
        // { view_barang: 'asc' },
    })
    return data
}


export async function GET(req) {
    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers()

    const res = await ResponseData(data, authorization)
    return Response.json({ ok: 'ok' })
}