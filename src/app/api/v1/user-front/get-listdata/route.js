import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers() {
    const data = await prisma.admin.findMany({
        select: {
            id: true,
            nama_barang: true,
            harga_barang: true,
            rating_barang: true,
            total_penjualan_barang: true,
            gambar_barang: true,
            gambar_barang: true,
            slug_barang: true,
            diskon_barang: true,
            like_barang: true,
            jumlah_barang: true,
            kupon_barang: true,
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
    return res
}