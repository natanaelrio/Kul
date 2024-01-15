import { useEffect, useState } from 'react'
import { TbDiamond } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import styles from '@/components/header.module.css'
import Link from 'next/link';
import Pencariannew from '@/components/pencariannew';
import SkletonSearch from "@/components/skletonSearch"
import { useStore } from '@/lib/zustand'
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter()
    const [change, setChange] = useState(true)
    const [data, setData] = useState([])
    const [klikcari, setKlikcari] = useState(false)
    const [border, setBorder] = useState(false)
    const [notfound, setNotFound] = useState(true)
    const [value, setValue] = useState('')
    const [skleton, setSkleton] = useState(true)

    const setOpenLove = useStore((state) => state.setOpenLove)
    const setOpenKeranjang = useStore((state) => state.setOpenKeranjang)
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
    useEffect(() => {
        const windowScroll = () => {
            window.scrollY <= 50 ? setChange(true) : setChange(false)
        }
        window.addEventListener('scroll', windowScroll)
    }, [setChange, keranjangZ]);


    useEffect(() => {
        const debounce = setTimeout(() => {
            const fetchData = async () => {
                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/search-header?cari=${value}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': process.env.NEXT_PUBLIC_SECREET
                    }
                })
                const data = await res.json()
                // Notfound data
                data?.data?.length && value ? setNotFound(true) :
                    value == '' ? setNotFound(true) : setNotFound(false)

                setData(data?.data)
            }
            fetchData()
        }, 1000);
        return () => clearTimeout(debounce)
    }, [value])

    useEffect(() => {
        //SKELTOON
        value ?
            data?.length && value ? setSkleton(true) : notfound ? setSkleton(false, setBorder(true)) : setSkleton(true)
            : setSkleton(true)

        // Notfound value
        value ? setKlikcari(true, setBorder(true)) : setKlikcari(false, setBorder(false))
    }, [value, data, skleton])

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setKlikcari()
            setBorder(false)
        }
    };

    return (
        <>

            <nav className={styles.nav}
                style={change ? { boxShadow: 'none' } : { boxShadow: '0 1px 3px #0000001a, 0 1px 2px #0000000f' }}
            >
                <Link prefetch={false} href={'/'} className={styles.logogambar}>
                    <TbDiamond className={styles.logogambardalam} />
                </Link>
                <div className={styles.pencarian} >
                    <div className={styles.dalampencarian}
                        onClick={() => {
                            setKlikcari(true),
                                setBorder(border),
                                setNotFound(true)
                        }}
                    >
                        <div className={styles.input}>
                            <form onSubmit={(e) => { e.preventDefault(), router.push(`/search?query=${value}`) }} >
                                <input
                                    style={{ borderRadius: border ? '15px 15px 0 0' : '15px' }}
                                    type="search"
                                    placeholder="cari produk..."
                                    className={styles.inputtrue}
                                    onChange={(e) => { setValue(e.target.value) }}
                                    value={value}
                                    onKeyDown={handleKeyDown}
                                />
                            </form>
                        </div>
                        <div className={styles.hilang} >
                            <div className={styles.logocari} >
                                <FaSearch className={styles.logocaridalam} />
                            </div>
                        </div>
                    </div>
                    {skleton ?
                        null : <div className={styles.skletoncontainer}>
                            <SkletonSearch />
                        </div>
                    }

                    {klikcari ? <Pencariannew
                        data={data}
                        notfound={notfound}
                        value={value}
                    /> : null}
                </div>
                <div className={styles.pilihan}>
                    <div className={kondisiLove ? styles.animasi : null} >
                        <div className={styles.icon} onClick={setOpenLove}>
                            {love?.length ? <div className={styles.number}>{love?.length}</div> : <div> </div>}
                            <FaRegHeart />
                        </div>
                    </div>
                    <div className={kondisiKeranjang ? styles.animasi : null}>
                        <div className={styles.icon} onClick={setOpenKeranjang}>
                            {keranjang?.length ? <div className={styles.number}>{keranjang?.length}</div> : <div> </div>}
                            <LuShoppingCart />
                        </div>
                    </div>
                    <Link href={'/admin'} className={styles.login}>
                        Log in
                    </Link>
                </div>
            </nav >
            {klikcari ? <div className={styles.hilangkan} onClick={() => {
                setKlikcari(false),
                    setValue(''),
                    setBorder(false)
                setNotFound(true)
            }
            }></div>
                : null}
        </>
    )
}
