import { useEffect, useState } from 'react'
import { TbDiamond } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import styles from '@/components/header.module.css'
import Link from 'next/link';
import Pencariannew from '@/components/pencariannew';

export default function Header() {
    const [change, setChange] = useState(true)
    const [data, setData] = useState()
    const [klikcari, setKlikcari] = useState(false)
    const [border, setBorder] = useState()
    const [notfound, setNotFound] = useState(true)
    const [value, setValue] = useState()
    const [skleton, setSkleton] = useState(true)

    useEffect(() => {
        const windowScroll = () => {
            window.scrollY <= 50 ? setChange(true) : setChange(false)
        }
        window.addEventListener('scroll', windowScroll)
    }, [setChange]);

    useEffect(() => {
        const debounce = setTimeout(() => {
            const fetchData = async () => {
                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/search-all?cari=${value}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': process.env.NEXT_PUBLIC_SECREET
                    }
                })
                const data = await res.json()
                setData(data?.data)
            }
            fetchData()
        }, 1000);
        return () => clearTimeout(debounce)
    }, [value])

    const [arayy, setArayy] = useState(true)
    const HandlePencarian = (e) => {
        e[0] ? setKlikcari(true, setBorder(true)) : setKlikcari(false, setBorder(false))
        data[0] && [] ? setArayy(false) : setArayy(true)
        e.length > 0 && arayy ? setNotFound(true) : setNotFound(false)
        e.length > 0 ? setSkleton(false) : setSkleton(true)
        // console.log(data[0] && [] ? true : false);
    }
    // console.log();
    // console.log(data);
    // console.log(value);
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
                                setBorder(border)
                        }}
                    >
                        <div className={styles.input}>
                            <input
                                style={{ borderRadius: border ? '15px 15px 0 0' : '15px' }}
                                type="search"
                                placeholder="cari produk..."
                                className={styles.inputtrue}
                                onChange={(e) => {
                                    setValue(e.target.value),
                                        HandlePencarian(e.target.value)
                                }}
                                value={value}
                            />
                        </div>
                        <div className={styles.hilang} >
                            <div className={styles.logocari} >
                                <CiSearch className={styles.logocaridalam} />
                            </div>
                        </div>
                    </div>
                    {klikcari ? <Pencariannew
                        data={data}
                        notfound={notfound}
                        skleton={skleton}
                    /> : null}
                </div>
                <div className={styles.pilihan}>
                    <div className={styles.icon}>
                        <FaRegHeart />
                    </div>
                    <div className={styles.icon}>
                        <LuShoppingCart />
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
