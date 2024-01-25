"use client"
import styles from '@/components/Layout/headerFooter.module.css'
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useStore } from '@/lib/zustand'
import FormPembelian from '@/components/formPembelian';
import Love from '@/components/love';
import Keranjang from '@/components/keranjang';

export default function HeaderFooter({ children, kondisiFalseSearch }) {
  const openLove = useStore((state) => state.openLove)

  return (
    <>
      <div className={styles.countainer}>
        <Header kondisiFalseSearch={kondisiFalseSearch} />
        <main className={styles.main} >
          {children}
        </main>
        <Footer />
      </div>
      {openLove && <Love />}
    </>
  )
}
