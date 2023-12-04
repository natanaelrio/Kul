"use client"
import styles from './layoutUtama.module.css'
import { TbDiamond } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import React, { useContext } from 'react'
import Link from 'next/link'
import Pencarian from './pencarian';

import { Pencarianku } from '@/context/pencarianProvider'


export default function LayoutUtama({ children }) {
  const { isopen, setIsopen } = useContext(Pencarianku);
  return (
    <>
      <div className={styles.countainer}>
        <nav className={styles.nav}>
          <div className={styles.logogambar}>
            <TbDiamond className={styles.logogambardalam} />
          </div>
          <div className={styles.pencarian} >
            <div className={styles.dalampencarian} >
              <div className={styles.input}
              >
                <input type="text"
                  onClick={() => setIsopen(!isopen)}
                  placeholder="cari barang..."
                  className={styles.inputtrue}
                />
              </div>
              <div className={styles.hilang} >
                <div className={styles.logocari} >
                  <CiSearch className={styles.logocaridalam} />
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className={styles.main} >
          {children}
        </main>

        <footer className={styles.bawah}>
          <div className={styles.isi}>
            <div className={styles.powerby}>
              © Website by <b>Natanael Rio Wijaya</b>
            </div>
            <div className={styles.sosmed}>
              <Link href="/"> <FaFacebookSquare className={styles.sosmeddalam} /></Link>
              <Link href="/"> <FaInstagramSquare className={styles.sosmeddalam} /></Link>
              <Link href="/"><FaTwitterSquare className={styles.sosmeddalam} /></Link>
            </div>
          </div>
        </footer>
      </div>
      {isopen && <Pencarian />}
    </>
  )
}
