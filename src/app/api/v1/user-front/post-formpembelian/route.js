
import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(databody) {
    const data = await prisma.formPembelian.create({ data: databody })
    return data
}

export async function POST(req) {
    const { nota_user, status_pesanan, nama_lengkap_user, alamat_lengkap_user, kode_pos_user, no_hp_user, catatan_user, dataPesanan } = await req.json()

    const databody = {
        nota_user,
        status_pesanan,
        nama_lengkap_user,
        alamat_lengkap_user,
        kode_pos_user,
        no_hp_user,
        catatan_user,
        dataPesanan
    }

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(databody)

    const res = await ResponseData(data, authorization)
    return res
}