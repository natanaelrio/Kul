import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(databody) {
    const data = await prisma.admin.delete({
        where: {
            btoa: databody.id
        },
    })
    return data
}

export async function DELETE(req) {
    const { id } = await req.json()
    const databody = { id }
    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(databody)
    const res = await ResponseData(data, authorization)
    return res
}