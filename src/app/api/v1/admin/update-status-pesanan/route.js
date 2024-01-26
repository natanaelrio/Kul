import { prisma } from "@/lib/prisma"

export async function PUT(req) {
    const { dataPesanan, status_pesanan, nota_user } = await req.json()
    const data = { dataPesanan, status_pesanan, nota_user }

    console.log(data);
    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const users = await prisma.formPembelian.update({
            where: {
                nota_user: nota_user,
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