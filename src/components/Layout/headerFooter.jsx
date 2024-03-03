"use client"
import styles from '@/components/Layout/headerFooter.module.css'
import Header from '@/components/header';
import Footer from '@/components/footer';
import Love from '@/components/love';
import Pencarian from '@/components/pencarian';
import { useStore } from '@/lib/zustand'

export default function HeaderFooter({ children, kondisiatas }) {
  const openLove = useStore((state) => state.openLove)
  const openPencarian = useStore((state) => state.openPencarian)

  return (
    <>
      <div className={styles.countainer}>
        <Header kondisiatas={kondisiatas} />
        <main className={styles.main} >
          {children}
        </main>
        <Footer />
      </div>
      {openLove && <Love />}
      {openPencarian && <Pencarian kondisiatas={kondisiatas} />}
    </>
  )
}
