"use client"
import styles from '@/components/Layout/headerFooter.module.css'
import Pencarian from '@/components/pencarian';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useStore } from '@/lib/zustand'
import FormPembelian from '@/components/formpembelian';


export default function HeaderFooter({ children }) {
  const openPencarian = useStore((state) => state.openPencarian)
  const openFormPembelian = useStore((state) => state.openFormPembelian)
  return (
    <>
      <div className={styles.countainer}>
        <Header />
        <main className={styles.main} >
          {children}
        </main>
        <Footer />
      </div>
      {openPencarian && <Pencarian />}
      {openFormPembelian && <FormPembelian />}
    </>
  )
}
