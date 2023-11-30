"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { TbDiamond } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import React, { useState } from 'react'

export default function Home() {
  const [logo, setLogo] = useState(1)
  return (
    <>
      <div className={styles.countainer}>
        <nav className={styles.nav}>
          <div className={styles.logogambar}>
            <TbDiamond size={70} style={{ color: "white" }} />
          </div>
          <div className={styles.pencarian} >
            <div className={styles.input}   >
              <input type="text"
                placeholder={logo ? 'cari barang' : ''}
                onClick={() => setLogo(0)}
                style={logo ? { borderColor: '', padding: '0 20px 0 50px' } : { borderColor: '#6C584C', borderWidth: '5px', padding: '0 20px 0 20px' }} />
            </div>
            <div className={styles.hilang} style={{ display: logo ? 'block' : 'none' }}>
              <div className={styles.logocari} >
                <CiSearch size={30} />
              </div>
            </div>
          </div>
        </nav>
        <footer className={styles.bawah}>
          bawahhh
        </footer>
      </div>
      {logo ? null :
        <div className="hilangkan"
          onClick={() => setLogo(1)}>
        </div> }

    </>
  )
}
