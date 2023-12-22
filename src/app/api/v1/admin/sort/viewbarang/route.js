import { prisma } from "@/lib/prisma"

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const sort = searchParams.get('sort');
    const authorization = req.headers.get('authorization')
    console.log(sort);
    const wkwk = sort ? 'asc' : 'desc'

    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const users = await prisma.admin.findMany({
            select: {
                nama_barang: true,
                total_penjualan_barang: true,
                view_barang: true,
            },
            orderBy: [
                // {
                //     nama_barang: 'asc',
                // },
                // {
                //     total_penjualan_barang: 'desc',
                // },
                {
                    view_barang: wkwk,
                }
            ],
        })
        if (users) {
            return Response.json({ status: 200, isCreated: true, data: users })
        } else Response.json({ status: 500, isCreated: false })
    }
    else
        return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}   