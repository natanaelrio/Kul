import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(cari, kondisiSortBy) {
    const data = await prisma.admin.findMany({
        take: cari ? 5 : 0,
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
            kondisi_diskon_barang: true,
            detail_deskripsi_barang: true,
        },
        where: {
            nama_barang: {
                contains: cari,
                mode: 'insensitive'
            },
        },
        orderBy: kondisiSortBy ? { harga_barang: sortby == 'price_low_to_high' && 'asc' || sortby == 'price_high_to_low' && 'desc' || 'asc' } : { id: 'desc' }
    })
    return data
}


export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const cari = searchParams.get('cari');
    const sortby = searchParams.get('sortby');
    const kondisiSortBy = sortby == 'price_high_to_low' || sortby == 'price_low_to_high'
    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(cari, kondisiSortBy)
    const res = await ResponseData(data, authorization)
    return res
}