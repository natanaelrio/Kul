import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(id) {

    const data = await prisma.formPembelian.findUnique({
        where: {
            nota_user: id
        },
        select: {
            payment: true
        }
    })
    return data
}

export async function GET(req) {
    const authorization = req.headers.get('authorization')
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const data = await AmbilDataUsers(id)
    const res = await ResponseData(data, authorization)
    return res
}