import { useEffect, useState } from 'react'
import { TbDiamond } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import styles from '@/components/header.module.css'
import CustomLink from '@/lib/customLink'
import { useStore } from '@/lib/zustand'
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'
import CustomLinkA from '@/lib/customLinkA';

export default function Header() {
    const setOpenLove = useStore((state) => state.setOpenLove)
    const setOpenPencarian = useStore((state) => state.setOpenPencarian)

    const loveZ = useStoreDataFront((state) => state.loveZ)
    const keranjangZ = useStoreDataFront((state) => state.keranjangZ)
    const kondisiLove = useStoreDataFront((state) => state.kondisiLove)
    const kondisiKeranjang = useStoreDataFront((state) => state.kondisiKeranjang)

    // MATCH SERVER DAN CLIENT
    const [love, setLove] = useState([])
    const [keranjang, setKeranjang] = useState([])

    useEffect(() => {
        setLove(loveZ)
        setKeranjang(keranjangZ)
    }, [loveZ, keranjangZ])

    // SCROLL EFFECK
    const [change, setChange] = useState(true)
    useEffect(() => {
        const windowScroll = () => {
            window.scrollY <= 50 ? setChange(true) : setChange(false)
        }
        window.addEventListener('scroll', windowScroll)
    }, [setChange, keranjangZ]);

    return (
        <>
            <nav className={styles.nav}
                style={change ? { boxShadow: 'none' } : { boxShadow: '0 1px 3px #0000001a, 0 1px 2px #0000000f' }}
            >
                <CustomLinkA href={'/'} className={styles.logogambar} aria-label={'logo'}>
                    <TbDiamond className={styles.logogambardalam} />
                </CustomLinkA>
                <div className={styles.pencarian} >
                    <div className={styles.dalampencarian}>
                        <div className={styles.input}>
                            <form>
                                <input
                                    onClick={() => {
                                        setOpenPencarian()
                                    }}
                                    type="search"
                                    placeholder="cari produk..."
                                    className={styles.inputtrue}
                                />
                            </form>
                        </div>
                        <div className={styles.hilang} >
                            <div className={styles.logocari} >
                                <FaSearch className={styles.logocaridalam} />
                            </div>
                        </div>
                    </div>


                </div>
                <div className={styles.pilihan}>
                    <div className={kondisiLove ? styles.animasi : null} >
                        <div className={styles.iconlove} onClick={setOpenLove}>
                            {love?.length ? <div className={styles.number}>{love?.length}</div> : <div> </div>}
                            <FaRegHeart />
                        </div>
                    </div>
                    <div className={kondisiKeranjang ? styles.animasi : null}>
                        <CustomLinkA href={'/cart'} aria-label={'cart'}>
                            <div className={styles.iconkeranjang}>
                                {keranjang?.length ? <div className={styles.number}>{keranjang?.length}</div> : <div> </div>}
                                <LuShoppingCart />
                            </div>
                        </CustomLinkA>
                    </div>

                    <CustomLink href={'/admin'}>
                        <div className={styles.login}>
                            Log in
                        </div>
                    </CustomLink>
                </div>
            </nav >
        </>
    )
}
