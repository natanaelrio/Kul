import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(id) {
    const data = await prisma.formPembelian.findMany({
        select: {
            no_hp_user: true,
            dataPesanan: true,
            payment: true
        },
        where: {
            AND: [
                { no_hp_user: BigInt(id) },
                { payment: true }
            ],
        }
    })

    return data
}


export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const nomer = searchParams.get('no');

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(nomer)
    const res = await ResponseData(data, authorization)
    return res
}