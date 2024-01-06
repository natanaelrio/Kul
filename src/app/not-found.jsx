'use client'
import Link from 'next/link'
import styles from '@/app/notFound.module.css'
import HeaderFooter from '@/components/Layout/headerFooter'

export default function NotFound() {
  return (
    <HeaderFooter>
      <div className={styles.notfound}>
        <h2>Not Found Page</h2>
        <Link href="/">Return Home</Link>
      </div>
    </HeaderFooter>
  )
}