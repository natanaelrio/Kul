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

    openLove: false,
    setOpenLove: () => {
        set((state) => ({
            openLove: !state.openLove
        })
        )
    },

    openKeranjang: false,
    setOpenKeranjang: () => {
        set((state) => ({
            openKeranjang: !state.openKeranjang
        })
        )
    },
    openAnimasiLove: false,
    setOpenAnimasiLove: () => {
        set((state) => ({
            openAnimasiLove: !state.openAnimasiLove
        })
        )
    },
    openAnimasiKeranjang: false,
    setOpenAnimasiKeranjang: () => {
        set((state) => ({
            openAnimasiKeranjang: !state.openAnimasiKeranjang
        })
        )
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
    valueDelete: [],
    setValueDelete: (e) => {
        set({ valueDelete: e })
    }
}))
