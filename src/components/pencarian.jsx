import styles from "@/components/pencarian.module.css"
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useStore } from '@/lib/zustand'
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDebounce } from "@uidotdev/usehooks";
import { useStoreListDataProduct } from '@/utils/user-front/getproductListZ'
import { Suspense, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import ListPencarianProduk from "@/components/listPencarianProduk";
import SkletonSearch from "@/components/skletonSearch"
import CustomLink from '@/lib/customLink'

export default function Pencarian({ kondisiatas }) {
    useLockBodyScroll()
    const mediaMatch = window.matchMedia('(max-width: 768px)')
    const router = useRouter()
    const setOpenPencarian = useStore((state) => state.setOpenPencarian)

    const fetchdatasearch = useStoreListDataProduct((state) => state.fetchdatasearch)
    const datasearch = useStoreListDataProduct((state) => state.datasearch)

    const [searchTerm, setSearchTerm] = useState('');
    const [value, setValue] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    useEffect(() => {
        const searchHN = async () => {
            if (debouncedSearchTerm) {
                fetchdatasearch(debouncedSearchTerm, searchTerm?.length ? 3 : 0)
            }
        }
        searchHN()
    }, [debouncedSearchTerm, searchTerm])

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        setValue(e.target.value)
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setSearchTerm('')
            setOpenPencarian()
            router.push(`/search?query=${value}`)
        }
    }

    const dataPopuler = [
        { search: 'hoodie' },
        { search: 'forem' },
        { search: 'wecode' },
        { search: '2023' }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.dalam}>
                <div className={styles.hitam} onClick={() => { setOpenPencarian() }}></div>
                <div className={styles.content} style={kondisiatas ? { top: mediaMatch.matches ? 0 : 60 } : { top: 0 }}>
                    <div className={styles.input}>
                        <div className={styles.back} onClick={() => { setOpenPencarian() }}><IoIosArrowRoundBack size={50} /></div>
                        <form onSubmit={(e) => { e.preventDefault(), router.push(`/search?query=${value}`) }} >
                            <input
                                type="search"
                                placeholder="cari produk..."
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                            />
                            <div className={styles.logocari} >
                                <FaSearch className={styles.logocaridalam} />
                            </div>
                        </form>
                    </div>
                    <div className={styles.rekomendasi}>
                        {value ? <Suspense fallback={<SkletonSearch />}>
                            <ListPencarianProduk
                                data={datasearch.data}
                                value={value}
                                totalarray={datasearch.total_array}
                            />
                        </Suspense> :
                            <>
                                <div className={styles.judul}>Pencarian Populer</div>
                                {dataPopuler.map((data) => {
                                    return (
                                        <CustomLink href={`/search?query=${data.search}`} title={data?.nama_barang}>
                                            <div className={styles.list}
                                                onClick={() => { setOpenPencarian() }}
                                            >
                                                <CiSearch className={styles.logopopuler} />
                                                <div className={styles.text}>{data.search}</div>
                                            </div>
                                        </CustomLink >
                                    )
                                })}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
