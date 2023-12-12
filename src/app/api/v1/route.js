import prisma from "@/lib/prisma"

export async function POST(req) {
    const { end,nama_barang, kategori_barang, harga_barang, diskon_barang, rating_barang, total_penjualan_barang, diskripsi_barang, gambar_barang, slug_barang } = await req.json()
    const data = { end, nama_barang, kategori_barang, harga_barang, diskon_barang, rating_barang, total_penjualan_barang, diskripsi_barang, gambar_barang, slug_barang }

    const createCollection = await prisma.cobadua.create({ data })

    console.log(createCollection);

    if (!createCollection)
        return Response.json({ status: 500, isCreated: false })
    else
        return Response.json({ status: 200, isCreated: true })
}