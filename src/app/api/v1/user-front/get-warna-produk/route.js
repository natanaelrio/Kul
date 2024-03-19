import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(id) {

    const data = await prisma.admin.findMany({
        select: {
            warna_barang: true,
            gambar_barang: true,
            slug_barang: true,
            id_namabarang: true,
            detail_deskripsi_barang: true,
            harga_barang: true,
            nama_barang: true
        },
        where: {
            id_namabarang: {
                contains: id,
                mode: 'insensitive'
            }
        },
        orderBy:
            { id: 'desc' },
    })
    return data
}

export async function GET(req) {
    const authorization = req.headers.get('authorization')
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const data = await AmbilDataUsers(id)
    const res = await ResponseData(data, authorization)
    return res
}