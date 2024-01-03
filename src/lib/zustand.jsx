import { create } from 'zustand'

export const useStore = create((set) => ({
    // USER
    openFormPembelian: false,
    setOpenFormPembelian: () => {
        set((state) => ({
            openFormPembelian: !state.openFormPembelian
        })
        )
    },
    angka: 1,
    setTambahAngka: () => {
        set((state) => ({
            angka: state.angka >= 10 ? state.angka : state.angka + 1
        }))
    },
    setKurangAngka: () => {
        set((state) => ({
            angka: state.angka <= 1 ? state.angka - 0 : state.angka - 1
        }))
    },


    //ADMIN
    openPencarianAdmin: false,
    setOpenPencarianAdmin: () => {
        set((state) => ({
            openPencarianAdmin: !state.openPencarianAdmin
        })
        )
    },
    openDetailProdukAdmin: false,
    setOpenDetailProdukAdmin: () => {
        set((state) => ({
            openDetailProdukAdmin: !state.openDetailProdukAdmin
        })
        )
    },
}))
