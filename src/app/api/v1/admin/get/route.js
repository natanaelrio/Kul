import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(cari) {
    const data = await prisma.admin.findMany({
        take: 10,
        where: {
            nama_barang: {
                contains: cari ? cari : '',
                mode: 'insensitive'
            },
        },
        orderBy:
            { id: 'desc' },
        // { view_barang: 'asc' },
    })
    return data
}


export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const cari = searchParams.get('cari');
    const authorization = req.headers.get('authorization')

    const informasi = await prisma.admin.findMany({
        select: {
            view_barang: true,
            total_penjualan_barang: true,
        }
    })

    // INFORMASI TOTALBARANG
    const total_terjual = informasi.map((data) => data.total_penjualan_barang).reduce((acc, curr) => acc + curr, 0)

    // INFORMASI Total View
    const total_view = informasi.map((data) => data.view_barang).reduce((acc, curr) => acc + curr, 0)


    // INFORMASI PANJANG ARRAY
    const total_length = informasi.length

    const tambahan = {
        total_length: total_length,
        total_view: total_view,
        total_terjual: total_terjual
    }

    const data = await AmbilDataUsers(cari)
    const res = await ResponseData(data, authorization, tambahan)
    return res
}