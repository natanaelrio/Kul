import { prisma } from "@/lib/prisma"

export async function POST(req) {
    const authorization = req.headers.get("authorization")
    const { link_barang, jumlah_barang, tag_barang, btoa, end, nama_barang, kategori_barang, harga_barang, diskon_barang, rating_barang, total_penjualan_barang, diskripsi_barang, gambar_barang, slug_barang, kupon_barang, view_barang } = await req.json()
    const data = { link_barang, jumlah_barang, tag_barang, btoa, end, nama_barang, kategori_barang, harga_barang, diskon_barang, rating_barang, total_penjualan_barang, diskripsi_barang, gambar_barang, slug_barang, kupon_barang, view_barang }

    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const createCollection = await prisma.admin.createMany({ data })
        if (createCollection) {
            return Response.json({ status: 200, isCreate: true, })
        } else return Response.json({ status: 500, isCreate: false })
    }
    else return Response.json({ status: 500, data: 'authorization gagal' })
}