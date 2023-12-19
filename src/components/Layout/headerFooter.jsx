"use client"
import styles from '@/components/Layout/headerFooter.module.css'
import Pencarian from '@/components/pencarian';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useStore } from '@/lib/zustand'
import FormPembelian from '@/components/formpembelian';
import NextNProgress from 'nextjs-progressbar';
import NextTopLoader from 'nextjs-toploader';



export default function HeaderFooter({ children }) {
  const openPencarian = useStore((state) => state.openPencarian)
  const openFormPembelian = useStore((state) => state.openFormPembelian)
  return (
    <>
      <NextTopLoader />
      <NextNProgress color="#ffb700" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
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
