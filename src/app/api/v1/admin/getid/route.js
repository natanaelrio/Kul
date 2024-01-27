import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(id) {
    const data = await prisma.admin.findUnique({
        where: {
            btoa: id
        },
    })
    return data
}


export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(id)
    const res = await ResponseData(data, authorization)
    return res
}