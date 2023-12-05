"use client"
import styles from '@/components/Layout/headerFooter.module.css'
import React, { useContext } from 'react'
import Pencarian from '@/components/pencarian';
import { PencarianContext } from '@/context/pencarianProvider';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function HeaderFooter({ children }) {
  const { isopen, setIsopen } = useContext(PencarianContext);
  return (
    <>
      <div className={styles.countainer}>
        <Header />
        <main className={styles.main} >
          {children}
        </main>
        <Footer />
      </div>
      {isopen && <Pencarian />}
    </>
  )
}
