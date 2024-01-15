import { prisma } from "@/lib/prisma"

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const cari = searchParams.get('cari');
    const authorization = req.headers.get('authorization')

    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        // const pencarian = `%${cari}%`
        // const result = await prisma.$queryRaw`SELECT * FROM admin WHERE nama_barang LIKE ${pencarian} ORDER BY  view_barang ASC `


        const result = await prisma.admin.findMany({
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
                jumlah_barang: true
            },
            where: {
                nama_barang: {
                    contains: cari,
                    mode: 'insensitive'
                },
            },
            orderBy: { id: 'desc' },
        })

        if (result) {
            return Response.json({ status: 200, isCreated: true, data: result })
        } else return Response.json({ status: 500, isCreated: false })
    }
    else
        return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}   