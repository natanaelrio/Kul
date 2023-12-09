"use client"
import styles from '@/components/Layout/headerFooter.module.css'
import Pencarian from '@/components/pencarian';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useStore } from '@/lib/zustand'

export default function HeaderFooter({ children }) {
  const openPencarian = useStore((state) => state.openPencarian)
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
    </>
  )
}
