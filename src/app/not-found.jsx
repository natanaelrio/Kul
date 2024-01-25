'use client'
import CustomLink from '@/lib/customLink'
import styles from '@/app/notFound.module.css'
import HeaderFooter from '@/components/Layout/headerFooter'

export default function NotFound() {
  return (
    <HeaderFooter>
      <div className={styles.notfound}>
        <h2>Not Found Page</h2>
        <CustomLink href="/">Return Home</CustomLink>
      </div>
    </HeaderFooter>
  )
}