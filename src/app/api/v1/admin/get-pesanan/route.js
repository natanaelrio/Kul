import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(skip, take, nota, status) {
    const data = await prisma.formPembelian.findMany({
        skip: Number(skip) || 0,
        take: Number(take) || 10,
        orderBy: { id: 'desc' },
        where: status == 'belum-diproses' && {
            status_pesanan: { contains: 'belum-diproses' }
        } || status == 'sudah-diproses' && {
            status_pesanan: { contains: 'sudah-diproses' }
        } || status == 'sudah-berhasil' && {
            status_pesanan: { contains: 'sudah-berhasil' }
        } || status == 'false' && {
            payment: false
        } || status == 'true' && {
            payment: true
        }
            || {
            nota_user: nota ? {
                contains: nota || '',
                mode: 'insensitive'
            } : { not: null },
        },
    })
    BigInt.prototype.toJSON = function () {
        return this.toString()
    }

    return data
}


export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const skip = searchParams.get('skip')
    const take = searchParams.get('take')
    const nota = searchParams.get('nota')
    const status = searchParams.get('status')
    const authorization = req.headers.get('authorization')

    const informasi = await prisma.formPembelian.findMany({
        select: {
            dataPesanan: true,
            payment: true
        }
    })

    // INFORMASI PANJANG ARRAY
    const total_length = informasi.length

    // DATA PENDDING
    // INFORMASI HARGA
    const total_omsetP = informasi.filter((data) => data.payment == false).map((data) => data.dataPesanan.map((data) => data.harga_barang_user).reduce((acc, curr) => acc + curr, 0)).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })
    // INFORMASI TOTALBARANG
    const total_barangP = informasi.filter((data) => data.payment == false).map((data) => data.dataPesanan.map((data) => data.jumlah_barang_user).reduce((acc, curr) => acc + curr, 0)).reduce((acc, curr) => acc + curr, 0)

    //INFORMASI LENGTH PAYMENT
    const dataFalsePaymentP = informasi.filter((data) => data.payment == false).length


    // DATA SUKSES
    // INFORMASI HARGA
    const total_omsetS = informasi.filter((data) => data.payment == true).map((data) => data.dataPesanan.map((data) => data.harga_barang_user).reduce((acc, curr) => acc + curr, 0)).reduce((acc, curr) => acc + curr, 0).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })
    // INFORMASI TOTALBARANG
    const total_barangS = informasi.filter((data) => data.payment == true).map((data) => data.dataPesanan.map((data) => data.jumlah_barang_user).reduce((acc, curr) => acc + curr, 0)).reduce((acc, curr) => acc + curr, 0)

    const dataTruePaymentS = informasi.filter((data) => data.payment == true).length


    const tambahan = {
        total_array: total_length,

        total_omsetP: total_omsetP,
        total_barangP: total_barangP,
        dataFalsePaymentP: dataFalsePaymentP,
        
        total_omsetS: total_omsetS,
        total_barangS: total_barangS,
        dataTruePaymentS: dataTruePaymentS,

        take_array: Number(take) || 10,
        skip_array: Number(skip) || 0,
    }

    const data = await AmbilDataUsers(skip, take, nota, status)
    const res = await ResponseData(data, authorization, tambahan)
    return res
}