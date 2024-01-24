
export default async function ProdukHarga({ keranjang, hargaKeranjang, harga }) {
    return (
        <>
            {keranjang?.length === 1 ? hargaKeranjang : harga}
        </>
    )
}
