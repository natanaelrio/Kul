import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(no) {
    const data = await prisma.formPembelian.findMany({
        select: {
            no_hp_user: true,
            dataPesanan: true,
            payment: true,
        },
        where: {
            AND: [
                { no_hp_user: no },
                { payment: true }
            ],
        }
    })

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    return data
}


export async function GET(req) {


    const searchParams = req.nextUrl.searchParams;
    const no = searchParams.get('no');
    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(no)
    const res = await ResponseData(data, authorization)
    return res
}