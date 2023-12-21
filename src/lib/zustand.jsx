import { create } from 'zustand'

export const useStore = create((set) => ({
    // USER
    openPencarian: false,
    setOpenPencarian: () => {
        set((state) => ({
            openPencarian: !state.openPencarian
        })
        )
    },
    openFormPembelian: false,
    setOpenFormPembelian: () => {
        set((state) => ({
            openFormPembelian: !state.openFormPembelian
        })
        )
    },

    openJumlah: false,
    setOpenJumlah: () => {
        set((state) => ({
            openJumlah: !state.openJumlah
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
}))
