"use client"
import styles from '@/components/Layout/headerFooter.module.css'
import Header from '@/components/header';
import Footer from '@/components/footer';
import Love from '@/components/love';
import { useStore } from '@/lib/zustand'

export default function HeaderFooter({ children, kondisiFalseSearch, kondisiatas }) {
  const openLove = useStore((state) => state.openLove)

  return (
    <>
      <div className={styles.countainer}>
        <Header kondisiFalseSearch={kondisiFalseSearch} kondisiatas={kondisiatas} />
        <main className={styles.main} >
          {children}
        </main>
        <Footer />
      </div>
      {openLove && <Love />}
    </>
  )
}
