"use client"
import styles from '@/components/Layout/headerFooter.module.css'
import Header from '@/components/header';
import Footer from '@/components/footer';
import Love from '@/components/love';
import Pencarian from '@/components/pencarian';
import { useStore } from '@/lib/zustand'
import Introduction from '@/components/introduction'
import MenuPembelian from '@/components/menuPembelian';
import Notifikasi from '@/components/notifikasi';

export default function HeaderFooter({ children, kondisiatas, textNotif, data }) {
  const openLove = useStore((state) => state.openLove)
  const openPencarian = useStore((state) => state.openPencarian)
  const openIsScrollPast = useStore((state) => state.openIsScrollPast)
  const isLoading = useStore((state) => state.isLoading)
  const setIsLoading = useStore((state) => state.setIsLoading)

  setTimeout(() => {
    setIsLoading(false)
  }, 7000);

  return (
    <>
      <div className={styles.countainer}>
        {kondisiatas && <Introduction />}
        <Header />
        <main className={styles.main} >
          {children}
        </main>
        <Footer />
        {openLove && <Love />}
        {openPencarian && <Pencarian kondisiatas={kondisiatas} />}
        {openIsScrollPast && <MenuPembelian data={data} />}
        {isLoading && <Notifikasi textNotif={textNotif} />}
      </div>
    </>
  )
}
