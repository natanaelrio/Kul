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
    }
}))
