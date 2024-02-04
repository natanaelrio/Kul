import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(databody) {
    const data = await prisma.admin.create({ data: databody })
    return data
}

export async function POST(req) {
    const { link_barang, jumlah_barang, tag_barang, btoa,
        end, nama_barang, kategori_barang, harga_barang,
        diskon_barang, rating_barang, total_penjualan_barang,
        diskripsi_barang, gambar_barang, slug_barang,
        kupon_barang, view_barang } = await req.json()

    const databody = {
        link_barang, jumlah_barang, tag_barang, btoa,
        end, nama_barang, kategori_barang, harga_barang,
        diskon_barang, rating_barang, total_penjualan_barang,
        diskripsi_barang, gambar_barang, slug_barang,
        kupon_barang, view_barang
    }

    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(databody)
    const res = await ResponseData(data, authorization)
    return res
}