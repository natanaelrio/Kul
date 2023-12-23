import { prisma } from "@/lib/prisma"

export async function GET(req) {
    // const searchParams = req.nextUrl.searchParams;
    // const sort = searchParams.get('sort');
    // return Response.json({ status: 200, isCreated: true })
    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const users = await prisma.admin.findMany({
            orderBy: 
                { id: 'desc' },
                // { view_barang: 'asc' },
        })
        if (users) {
            return Response.json({ status: 200, isCreated: true, data: users })
        } else Response.json({ status: 500, isCreated: false })
    }
    else
        return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}   

