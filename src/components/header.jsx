import { useCallback, useEffect, useState } from 'react'
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
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { useDebounce } from "@uidotdev/usehooks";
import { useSearchParams } from 'next/navigation'

export default function Header({ kondisiFalseSearch }) {
    const router = useRouter()

    const setOpenLove = useStore((state) => state.setOpenLove)
    const setOpenKeranjang = useStore((state) => state.setOpenKeranjang)
    const loveZ = useStoreDataFront((state) => state.loveZ)
    const keranjangZ = useStoreDataFront((state) => state.keranjangZ)
    const kondisiLove = useStoreDataFront((state) => state.kondisiLove)
    const kondisiKeranjang = useStoreDataFront((state) => state.kondisiKeranjang)

    const fetchdatasearch = useStoreListDataProduct((state) => state.fetchdatasearch)
    const datasearch = useStoreListDataProduct((state) => state.datasearch)

    // MATCH SERVER DAN CLIENT
    const [love, setLove] = useState([])
    const [keranjang, setKeranjang] = useState([])

    useEffect(() => {
        setLove(loveZ)
        setKeranjang(keranjangZ)
    }, [loveZ, keranjangZ])

    const [change, setChange] = useState(true)
    // SCROLL EFFECK
    useEffect(() => {
        const windowScroll = () => {
            window.scrollY <= 50 ? setChange(true) : setChange(false)
        }
        window.addEventListener('scroll', windowScroll)
    }, [setChange, keranjangZ]);

    const [klikcari, setKlikcari] = useState(false)
    const [border, setBorder] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState('')
    const [notfound, setNotFound] = useState(true)
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const searchParams = useSearchParams()
    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        setValue(e.target.value)
        kondisiFalseSearch ? null : router.push(`${process.env.NEXT_PUBLIC_URL}` + '/search?' + createQueryString('query', e.target.value))
    };

    useEffect(() => {
        const searchHN = async () => {
            setIsLoading(true);
            if (debouncedSearchTerm) {
                fetchdatasearch(debouncedSearchTerm)
                setResults(datasearch?.data || [])
                setIsLoading(true);
            }
            setIsLoading(false);
        };
        searchHN()
    }, [debouncedSearchTerm]);

    useEffect(() => {
        // Jika Value Kosong
        !value.length ?
            kondisiFalseSearch && setKlikcari(false) || setBorder(false)
            : kondisiFalseSearch && setKlikcari(true) || setBorder(kondisiFalseSearch ? true : false)

        // Jika data Tidak Ada
        !results.length ? kondisiFalseSearch && setNotFound(false) : kondisiFalseSearch && setNotFound(true)
    }, [value, results])

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
                            kondisiFalseSearch ? setKlikcari(true) : setKlikcari(false),
                                setBorder(border),
                                setNotFound(true)
                        }}
                    >
                        <div className={styles.input}>
                            <form onSubmit={(e) => { e.preventDefault(), fetchdatasearch(value), router.push(`/search?query=${value}`) }} >
                                <input
                                    style={{ borderRadius: border ? '15px 15px 0 0' : '15px' }}
                                    type="search"
                                    placeholder="cari produk..."
                                    className={styles.inputtrue}
                                    onChange={handleChange}
                                    value={searchParams.get('query')}
                                />
                            </form>
                        </div>
                        <div className={styles.hilang} >
                            <div className={styles.logocari} >
                                <FaSearch className={styles.logocaridalam} />
                            </div>
                        </div>
                    </div>

                    {kondisiFalseSearch && isLoading && value.length ?
                        <div className={styles.skletoncontainer}>
                            <SkletonSearch />
                        </div> : kondisiFalseSearch && value.length ? <Pencariannew
                            data={results}
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
