"use client"
import styles from '@/components/Layout/headerFooter.module.css'
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useStore } from '@/lib/zustand'
import FormPembelian from '@/components/formPembelian';

export default function HeaderFooter({ children }) {
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
      {openFormPembelian && <FormPembelian />}
    </>
  )
}
