import { useEffect, useState } from 'react'
import { TbDiamond } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import styles from '@/components/header.module.css'
import CustomLink from '@/lib/customLink'
import Pencariannew from '@/components/pencariannew';
import SkletonSearch from "@/components/skletonSearch"
import { useStore } from '@/lib/zustand'
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'
import { useRouter } from 'next/navigation';
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { useDebounce } from "@uidotdev/usehooks";

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


    // SCROLL EFFECK
    const [change, setChange] = useState(true)
    useEffect(() => {
        const windowScroll = () => {
            window.scrollY <= 50 ? setChange(true) : setChange(false)
        }
        window.addEventListener('scroll', windowScroll)
    }, [setChange, keranjangZ]);

    const [klikcari, setKlikcari] = useState(false)
    const [border, setBorder] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState('')
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        setValue(e.target.value)
    };

    useEffect(() => {
        setIsLoading(true);
        const searchHN = async () => {
            if (debouncedSearchTerm) {
                fetchdatasearch(debouncedSearchTerm)
            }
        }
        searchHN()
        setIsLoading(false);
    }, [debouncedSearchTerm]);
    const results = datasearch?.data

    useEffect(() => {
        // Jika Value Kosong
        !value.length ?
            kondisiFalseSearch && setKlikcari(false) || setBorder(false) || fetchdatasearch(searchTerm)
            : kondisiFalseSearch && setKlikcari(true) || setBorder(kondisiFalseSearch ? true : false)
    }, [value])


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setKlikcari(false)
            setBorder(false)
            setSearchTerm('')
        }
    }

    return (
        <>
            <nav className={styles.nav}
                style={change ? { boxShadow: 'none' } : { boxShadow: '0 1px 3px #0000001a, 0 1px 2px #0000000f' }}
            >
                <CustomLink href={'/'} className={styles.logogambar} aria-label={'logo'}>
                    <TbDiamond className={styles.logogambardalam} />
                </CustomLink>
                <div className={styles.pencarian} >
                    <div className={styles.dalampencarian}
                        onClick={() => {
                            kondisiFalseSearch ? setKlikcari(true) : setKlikcari(false),
                                setBorder(border)
                        }}
                    >
                        <div className={styles.input}>
                            <form onSubmit={(e) => { e.preventDefault(), router.push(`/search?query=${value}`) }} >
                                <input
                                    style={{ borderRadius: border ? '15px 15px 0 0' : '15px' }}
                                    type="search"
                                    placeholder="cari produk..."
                                    className={styles.inputtrue}
                                    onChange={handleChange}
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
                    {kondisiFalseSearch && !results?.length && value.length ? <div className={styles.skletoncontainer}>
                        <SkletonSearch />
                    </div> : kondisiFalseSearch && Boolean(value.length) && <Pencariannew
                        data={results}
                        value={value}
                    />}


                </div>
                <div className={styles.pilihan}>
                    <div className={kondisiLove ? styles.animasi : null} >
                        <div className={styles.icon} onClick={setOpenLove}>
                            {love?.length ? <div className={styles.number}>{love?.length}</div> : <div> </div>}
                            <FaRegHeart />
                        </div>
                    </div>
                    <div className={kondisiKeranjang ? styles.animasi : null}>
                        <CustomLink href={'/cart'}>
                            <div className={styles.icon}>
                                {keranjang?.length ? <div className={styles.number}>{keranjang?.length}</div> : <div> </div>}
                                <LuShoppingCart />
                            </div>
                        </CustomLink>
                    </div>

                    <CustomLink href={'/admin'}>
                        <div className={styles.login}>
                            Log in
                        </div>
                    </CustomLink>
                </div>
            </nav >
            {klikcari ? <div className={styles.hilangkan} onClick={() => {
                setKlikcari(false),
                    setValue(''),
                    setBorder(false)
            }
            }></div>
                : null}
        </>
    )
}
