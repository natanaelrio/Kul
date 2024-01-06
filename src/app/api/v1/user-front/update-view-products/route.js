import { prisma } from "@/lib/prisma"

export async function PUT(req) {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const { slug_barang, view_barang } = await req.json()
    const data = { slug_barang, view_barang }


    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const users = await prisma.admin.update({
            where: {
                slug_barang: id
            },
            data
        })
        if (users) {
            return Response.json({ status: 200, isUpdate: true, })
        } else return Response.json({ status: 500, isUpdate: false })
    }
    else
        return Response.json({ status: 500, isUpdate: false, contact: 'natanael rio wijaya 08971041460' })

}   