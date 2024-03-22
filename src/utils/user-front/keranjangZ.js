import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStoreDataFront = create(
    persist(
        (set, get) => ({

            // LOVE
            loveZ: [],
            kondisiLove: false,
            setdataLoveZ: async (loveZ, harga_barang, kondisi, catatan, dataEditKeranjang) => {
                set((state) => ({
                    loveZ: [...new Set([...state.loveZ, {
                        ...loveZ, ...{
                            value: Number(1),
                            harga_total_barang: harga_barang,
                            kondisiLove: true,
                            catatan: catatan,
                            dataEditKeranjang: dataEditKeranjang
                        }
                    }].reverse())],
                })),
                    set({ kondisiLove: true }),
                    kondisi ?
                        await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/update-love-products?id=${loveZ.slug_barang}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': process.env.NEXT_PUBLIC_SECREET
                            },
                            body: JSON.stringify({
                                like_barang: loveZ.like_barang ? loveZ.like_barang + 1 : 1
                            }),
                            next: { revalidate: 0 }
                        }) : null

            },
            setDeleteLoveZ: (e) => {
                set((state) => ({ loveZ: [...state.loveZ].filter((todo) => todo.id !== e) })),
                    set({ kondisiLove: false })
            },

            // KERANJANG
            keranjangZ: [],
            kondisiKeranjang: false,
            setdataKeranjangZ: (keranjangZ, harga_barang, ValueKeranjang, kondisiDiskon, angkaDiskon, catatan, dataEditKeranjang) => {
                set((state) => ({
                    keranjangZ: [...new Set([...state.keranjangZ, {
                        ...keranjangZ, ...{
                            value: Number(ValueKeranjang ? ValueKeranjang : 1),
                            harga_total_barang: harga_barang,
                            kondisi_diskon_barang: kondisiDiskon,
                            diskon_barang: angkaDiskon,
                            catatan: catatan ? catatan : '',
                            kondisi: true,
                            dataEditKeranjang: dataEditKeranjang
                        }
                    }].reverse())]
                })),
                    set({ kondisiKeranjang: true })
            },
            setDeleteKeranjangZ: (e) => {
                set((state) => ({ keranjangZ: [...state.keranjangZ].filter((todo) => todo.id !== e) })),
                    set({ kondisiKeranjang: false })
            },
            setdataKeranjangCountZ: (id, value) => {
                set((state) => ({
                    keranjangZ:
                        state.keranjangZ.map((data) => data.id == id ?
                            {
                                ...data,
                                value: value,
                                harga_total_barang: data.harga_barang * value
                            }
                            : data)
                }))
            },
            setUpdateKeranjangZ: (datanya, harga_barang, ValueKeranjang, kondisiDiskon, angkaDiskon, catatan, dataEditKeranjang) => {
                set((state) => ({
                    keranjangZ:
                        state.keranjangZ.map((data) => data.id == datanya.id ?
                            {
                                ...datanya,
                                value: data.value >= data.jumlah_barang ? data.jumlah_barang : ValueKeranjang + data.value,
                                harga_total_barang: harga_barang,
                                kondisi_diskon_barang: kondisiDiskon,
                                diskon_barang: angkaDiskon,
                                catatan: catatan ? catatan : '',
                                kondisi: true,
                                dataEditKeranjang: dataEditKeranjang ? dataEditKeranjang : ''
                            }
                            : data)
                }))
            },


        }),
        {
            name: 'shop-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by def
            partialize: (state) => ({ loveZ: state.loveZ, keranjangZ: state.keranjangZ }),
        },
    ),
)
