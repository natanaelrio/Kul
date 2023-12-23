import { prisma } from "@/lib/prisma"

export async function PUT(req) {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const { like_barang, tag_barang, end, nama_barang, kategori_barang, harga_barang, diskon_barang, rating_barang, total_penjualan_barang, diskripsi_barang, gambar_barang, slug_barang, kupon_barang, view_barang } = await req.json()
    const data = { like_barang, tag_barang, end, nama_barang, kategori_barang, harga_barang, diskon_barang, rating_barang, total_penjualan_barang, diskripsi_barang, gambar_barang, slug_barang, kupon_barang, view_barang }


    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const users = await prisma.admin.update({
            where: {
                id: Number(id),
            },
            data
        })
        if (users) {
            return Response.json({ status: 200, isUpdate: true, })
        } else Response.json({ status: 500, isUpdate: false })
    }
    else
        return Response.json({ status: 500, isUpdate: false, contact: 'natanael rio wijaya 08971041460' })

}   