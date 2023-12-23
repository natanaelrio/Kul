import { prisma } from "@/lib/prisma"

export async function GET(req) {
    return Response.json({ status: 200, isCreated: true, })
    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        // All posts that contain the word 'cat'.
        const result = await prisma.admin.findMany({
            where: {
                nama_barang: {
                    search: 'satu',
                },
                diskon_barang:{
                    search: 9
                }
            },
        })
        if (result) {
            return Response.json({ status: 200, isCreated: true, data: result })
        } else Response.json({ status: 500, isCreated: false })
    }
    else
        return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}   