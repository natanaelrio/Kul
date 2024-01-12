import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStoreDataFront = create(
    persist(
        (set, get) => ({

            // LOVE
            loveZ: [],
            setdataLoveZ: (loveZ, harga_barang) => {
                set((state) => ({
                    loveZ: [...new Set([...state.loveZ, {
                        ...loveZ, ...{
                            value: Number(1),
                            harga_total_barang: harga_barang,
                            kondisi: true
                        }
                    }].reverse())]
                }))
            },
            setDeleteLoveZ: (data, e) => {
                set({ loveZ: data.filter((todo) => todo.id !== e) })
            },

            // KERANJANG
            keranjangZ: [],
            setdataKeranjangZ: (keranjangZ, harga_barang) => {
                set((state) => ({
                    keranjangZ: [...new Set([...state.keranjangZ, {
                        ...keranjangZ, ...{
                            value: Number(1),
                            harga_total_barang: harga_barang,
                            kondisi: true
                        }
                    }].reverse())]
                }))
            },
            setDeleteKeranjangZ: (data, e) => {
                set({ keranjangZ: data.filter((todo) => todo.id !== e) })
            },
            setdataKeranjangCountZ: (keranjangZ) => {
                set({ keranjangZ: keranjangZ })
            },


        }),
        {
            name: 'shop-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by def
            partialize: (state) => ({ loveZ: state.loveZ, keranjangZ: state.keranjangZ }),
        },
    ),
)
