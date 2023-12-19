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
                id: `${data.id}`,
            },
        })
        if (deleteUser) {
            return Response.json({ status: 200, isCreated: true, data: deleteUser })
        } else Response.json({ status: 500, isCreated: false })
    }
    else
        return Response.json({ status: 500, isCreated: false, contact: 'natanael rio wijaya 08971041460' })
}   