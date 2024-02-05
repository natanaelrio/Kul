import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(id_user, jumlah_barang_user) {
    const informasi = await prisma.admin.findMany({
        where: {
            id: id_user,
        },
        select: {
            total_penjualan_barang: true,
        }
    })

    const data = await prisma.admin.update({
        where: {
            id: id_user,
        },
        data: {
            total_penjualan_barang: Number(informasi.map((data) => data.total_penjualan_barang)) + jumlah_barang_user
        }
    })
    return data
}


export async function PUT(req) {
    const { id_user, jumlah_barang_user} = await req.json()
    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(id_user, jumlah_barang_user)
    const res = await ResponseData(data, authorization)
    return res
}