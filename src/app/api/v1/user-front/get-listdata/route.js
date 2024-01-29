import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(take) {
    const data = await prisma.admin.findMany({
        take: take ? Number(take) : 5,
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
    const searchParams = req.nextUrl.searchParams;
    const take = searchParams.get('take');
    const authorization = req.headers.get('authorization')

    const informasi = await prisma.admin.findMany()
    const total_length = informasi.length
    const tambahan = {
        total_array: total_length,
    }

    const data = await AmbilDataUsers(take)
    const res = await ResponseData(data, authorization, tambahan)
    return res
}