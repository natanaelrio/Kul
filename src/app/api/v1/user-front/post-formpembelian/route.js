import { prisma } from "@/lib/prisma"

export async function POST(req) {
    const authorization = req.headers.get("authorization")
    const { nota_user, nama_lengkap_user, alamat_lengkap_user, kode_pos_user, no_hp_user, catatan_user, dataPesanan } = await req.json()
    const data = { nota_user, nama_lengkap_user, alamat_lengkap_user, kode_pos_user, no_hp_user, catatan_user, dataPesanan }

    console.log(data);
    if (authorization == process.env.NEXT_PUBLIC_SECREET) {
        const createCollection = await prisma.formPembelian.createMany({ data })
        if (createCollection) {
            return Response.json({ status: 200, isCreate: true, })
        } else return Response.json({ status: 500, isCreate: false })
    }
    else return Response.json({ status: 500, data: 'authorization gagal' })
}