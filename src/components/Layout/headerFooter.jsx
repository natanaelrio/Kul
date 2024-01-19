"use client"
import styles from '@/components/Layout/headerFooter.module.css'
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useStore } from '@/lib/zustand'
import FormPembelian from '@/components/formPembelian';
import Love from '@/components/love';
import Keranjang from '@/components/keranjang';
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'
import { useKeranjangCount } from '@/utils/user-front/keranjangCountZ'

export default function HeaderFooter({ children, kondisiFalseSearch, data }) {
  const openFormPembelian = useStore((state) => state.openFormPembelian)
  const openLove = useStore((state) => state.openLove)
  const openKeranjang = useStore((state) => state.openKeranjang)
  const keranjangZ = useStoreDataFront((state) => state.keranjangZ)
  const ValueKeranjang = useKeranjangCount((state) => state.ValueKeranjang)
  const dataFormLangsung =
    [{
      nama_barang: data?.data.nama_barang,
      harga_barang: data?.data.harga_barang,
      diskon_barang: data?.data.diskon_barang,
      kupon_barang: data?.data.kupon_barang,
      value_barang: ValueKeranjang
    }]

  const dataFormKeranjang = keranjangZ.map((data) => (
    {
      nama_barang: data.nama_barang,
      harga_barang: data.harga_barang,
      diskon_barang: data.diskon_barang,
      kupon_barang: data.kupon_barang,
      value_barang: data.value,
    }))

  return (
    <>
      <div className={styles.countainer}>
        <Header kondisiFalseSearch={kondisiFalseSearch} />
        <main className={styles.main} >
          {children}
        </main>
        <Footer />
      </div>
      {openKeranjang && <Keranjang />}
      {openLove && <Love />}
      {openFormPembelian &&
        <FormPembelian
          dataFormLangsung={openKeranjang ? dataFormKeranjang : dataFormLangsung} />}
    </>
  )
}
