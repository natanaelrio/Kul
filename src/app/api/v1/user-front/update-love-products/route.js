import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(id, databody) {
    const data = await prisma.admin.update({
        where: {
            slug_barang: id
        },
        data: databody
    })
    return data
}


export async function PUT(req) {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const { slug_barang, like_barang } = await req.json()
    const databody = { slug_barang, like_barang }
    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(id, databody)
    const res = await ResponseData(data, authorization)
    return res
}