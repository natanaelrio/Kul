"use client"
import styles from './layoutUtama.module.css'
import { TbDiamond } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import React, { useState } from 'react'
import Link from 'next/link'

export default function LayoutUtama({ children }) {
  const [logo, setLogo] = useState(1)
  return (
    <>
      <div className={styles.countainer}>
        <nav className={styles.nav}>
          <div className={styles.logogambar}>
            <TbDiamond className={styles.logogambardalam} />
          </div>
          <div className={styles.pencarian} >
            <div className={styles.input}>
              <input type="text"
                placeholder={logo ? 'cari barang' : ''}
                onClick={() => setLogo(0)}
                style={logo ? { borderColor: '', padding: '0 20px 0 50px' } : { borderColor: '#6C584C', borderWidth: '5px', padding: '0 20px 0 20px' }} />
            </div>
            <div className={styles.hilang} style={{ display: logo ? 'block' : 'none' }}>
              <div className={styles.logocari} >
                <CiSearch  className={styles.logocaridalam} />
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
              <Link href="/"> <FaFacebookSquare  className={styles.sosmeddalam} /></Link>
              <Link href="/"> <FaInstagramSquare  className={styles.sosmeddalam} /></Link>
              <Link href="/"><FaTwitterSquare  className={styles.sosmeddalam} /></Link>
            </div>
          </div>
        </footer>
      </div>
      {logo ? null :
        <div className="hilangkan"
          onClick={() => setLogo(1)}>
        </div>}
    </>
  )
}
