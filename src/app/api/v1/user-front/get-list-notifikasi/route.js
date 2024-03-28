import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(no) {
    const data = await prisma.formPembelian.findMany({
        select: {
            dataPesanan: true,
        },
        where: {
            AND: [
                { no_hp_user: Number(no) },
                { payment: true }
            ],
        }
    })

    return data.map((data) => data.dataPesanan)
}


export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const no = searchParams.get('no');

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    
    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(no)
    const res = await ResponseData(data, authorization)
    return res
}