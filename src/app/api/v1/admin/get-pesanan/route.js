import { prisma } from "@/lib/prisma"

export async function GET(req) {
    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const users = await prisma.formPembelian.findMany({
            // take: 10,
            orderBy: { id: 'desc' },
            // { view_barang: 'asc' },
        })
        if (users) {
            return Response.json({ status: 200, isCreated: true, data: users })
        } else Response.json({ status: 500, isCreated: false })
    }
    else
        return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}

