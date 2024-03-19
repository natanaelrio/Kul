import styles from '@/components/menuPembelian.module.css'
import { CiChat2 } from "react-icons/ci";
import { useStore } from '@/lib/zustand'
import { useStoreDataFront } from '@/utils/user-front/keranjangZ'
import { useEffect, useState } from 'react';

export default function MenuPembelian(props) {
    const data = props.data?.data
    const setOpenFormPembelian = useStore((state) => state.setOpenFormPembelian)
    const setDeleteKeranjangZ = useStoreDataFront((state) => state.setDeleteKeranjangZ)
    const loveZ = useStoreDataFront((state) => state.loveZ)
    const keranjangZ = useStoreDataFront((state) => state.keranjangZ)
    const setdataKeranjangZ = useStoreDataFront((state) => state.setdataKeranjangZ)


    // MATCH SERVER DAN CLIENT
    const [love, setLove] = useState([])
    const [keranjang, setKeranjang] = useState([])

    useEffect(() => {
        setLove(loveZ)
        setKeranjang(keranjangZ)
    }, [loveZ, keranjangZ])


    const handleKeranjangdanResetValue = (e) => {
        setDeleteKeranjangZ(e)
    }
    return (
        <div className={styles.container} >
            <div className={styles.width}>
                <div className={styles.chat}>
                    <CiChat2 className={styles.chatlogo} /> Chat
                </div>
                {data.id && keranjang?.filter((e) => e.id == data.id).map((e) => e.id).toString() ?
                    <div className={styles.keranjang}
                        style={{ background: 'var(--color-high' }}
                        onClick={() => handleKeranjangdanResetValue(data.id)
                        }>Hapus Keranjang
                    </div> :
                    <div className={styles.keranjang} >
                        <a href="#penutup"> Tambahkan Keranjang</a>
                    </div>
                }
                <div className={styles.belilangsung} >
                    <a href="#penutup2">Beli Sekarang</a>
                </div>
            </div>
        </div>
    )
}
