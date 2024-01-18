import { prisma } from "@/lib/prisma"

export async function GET(req) {
    // const searchParams = req.nextUrl.searchParams;
    // const sort = searchParams.get('sort');
    // return Response.json({ status: 200, isCreated: true })
    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const users = await prisma.admin.findMany({
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
            orderBy:
                { id: 'desc' },
            // { view_barang: 'asc' },
        }
        )
        if (users.length) {
            return Response.json({ status: 200, isCreated: true, data: users })
        } else return Response.json({ status: 500, isCreated: false })
    }
    else
        return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}

