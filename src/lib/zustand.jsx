import { create } from 'zustand'

export const useStore = create((set) => ({
    openPencarian: false,
    setOpenPencarian: () => {
        set((state) => ({
            openPencarian: !state.openPencarian
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
            angka: state.angka + 1
        }))
    },
    setKurangAngka: () => {
        set((state) => ({
            angka: state.angka <= 1 ? state.angka - 0 : state.angka - 1
        }))
    }

}))
