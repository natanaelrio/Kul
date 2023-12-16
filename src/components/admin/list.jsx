import styles from '@/components/admin/list.module.css'
import { TiDelete } from "react-icons/ti";
import { MdEditSquare } from "react-icons/md";
import { GoEye } from "react-icons/go";
export default function List() {
    return (

        <>

            <div className={styles.container}>
                <div className={styles.list}>

                    <div className={styles.pencarian}>
                        <input type="text" placeholder='cari...' />
                    </div>

                    <div className={styles.bungkusproduk}>
                        <div className={styles.produk} style={{ fontWeight: '700' }}>
                            <div className={styles.id}>
                                ID
                            </div>
                            <div className={styles.namaproduk}>
                                NAMA
                            </div>
                            <div className={styles.viewbarang}>
                                VIEW
                            </div>
                        </div>
                        <div className={styles.aksi}>
                            <div className={styles.edit}></div>
                            <div className={styles.delete}></div>
                        </div>
                    </div>
                    <div className={styles.bungkusproduk}>
                        <div className={styles.produk}>
                            <div className={styles.id}>
                                1000
                            </div>
                            <div className={styles.namaproduk}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quaerat ipsa ad odio distinctio voluptate suscipit, temporibus at iusto delectus! Cum a at, tempora eos ad odio deleniti repudiandae dicta doloremque nam? Unde voluptate dignissimos quidem minima iste, totam distinctio, accusantium tempora corrupti pariatur quo porro voluptates ea maiores, beatae sunt! Nesciunt minus, aliquam esse, ipsa quae adipisci minima dolorum laboriosam porro praesentium ab velit neque iste voluptatibus commodi harum doloremque eius necessitatibus officiis dicta, veniam consectetur facilis dolor quos. Odio minima, voluptatibus optio similique reiciendis voluptas maiores sed reprehenderit sunt saepe molestiae vel eum ratione sint libero culpa id.
                            </div>
                            <div className={styles.viewbarang}>
                                <div className={styles.dalamview}> <GoEye /> 13124</div>
                            </div>
                        </div>
                        <div className={styles.aksi}>
                            <div className={styles.delete}> <TiDelete /></div>
                        </div>
                    </div>

                    <div className={styles.bungkusproduk}>
                        <div className={styles.produk}>
                            <div className={styles.id}>
                                1
                            </div>
                            <div className={styles.namaproduk}>
                                Kucing Anggora
                            </div>
                            <div className={styles.viewbarang}>
                                <div className={styles.dalamview}> <GoEye /> 13124</div>
                            </div>
                        </div>
                        <div className={styles.aksi}>
                            <div className={styles.delete}> <TiDelete /></div>
                        </div>
                    </div>

                    <div className={styles.bungkusproduk}>
                        <div className={styles.produk}>
                            <div className={styles.id}>
                                1
                            </div>
                            <div className={styles.namaproduk}>
                                Kucing Anggora
                            </div>
                            <div className={styles.viewbarang}>
                                <div className={styles.dalamview}> <GoEye /> 13124</div>
                            </div>
                        </div>
                        <div className={styles.aksi}>
                            <div className={styles.delete}> <TiDelete /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
