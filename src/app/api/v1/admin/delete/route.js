import { prisma } from "@/lib/prisma"

export async function DELETE(req) {
    const { id } = await req.json()
    const data = { id }
    // console.log(data);

    const authorization = req.headers.get('authorization')
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        // All posts that contain the word 'cat'.
        const deleteUser = await prisma.admin.delete({
            where: {
                id: Number(data.id),
            },
        })
        if (deleteUser) {
            return Response.json({ status: 200, isDelete: true, data: deleteUser })
        } else Response.json({ status: 500, isDelete: false })
    }
    else
        return Response.json({ status: 500, isDelete: false, contact: 'natanael rio wijaya 08971041460' })
}           