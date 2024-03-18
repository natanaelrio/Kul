import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(sortby, take) {
    const kondisiSortBy = sortby == 'price_high_to_low' || sortby == 'price_low_to_high'
    const data = await prisma.admin.findMany({
        take: take ? Number(take) : 8,
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
            kondisi_diskon_barang: true,
            detail_deskripsi_barang: true,
            warna_barang:true
        },
        orderBy:
            { id: 'desc' },
        // { view_barang: 'asc' },
        orderBy: kondisiSortBy ? { harga_barang: sortby == 'price_low_to_high' && 'asc' || sortby == 'price_high_to_low' && 'desc' || 'asc' } : { id: 'desc' }
    })
    return data
}


export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const take = searchParams.get('take');
    const sortby = searchParams.get('sortby');
    const authorization = req.headers.get('authorization')

    const informasi = await prisma.admin.findMany({
        select: {
            id: true
        }
    })
    const total_length = informasi.length
    const tambahan = {
        total_array: total_length,
    }

    const data = await AmbilDataUsers(sortby, take)
    const res = await ResponseData(data, authorization, tambahan)
    return res
}