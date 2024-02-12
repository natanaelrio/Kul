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
    openFormPending: false,
    setOpenFormPending: () => {
        set((state) => ({
            openFormPending: !state.openFormPending
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

    openFilter: false,
    setOpenFilter: () => {
        set((state) => ({
            openFilter: !state.openFilter
        })
        )
    },

    //ADMIN
    openDetailProdukAdmin: false,
    setOpenDetailProdukAdmin: () => {
        set((state) => ({
            openDetailProdukAdmin: !state.openDetailProdukAdmin
        })
        )
    },
    openDetailDataPesanan: false,
    setOpenDetailDataPesanan: () => {
        set((state) => ({
            openDetailDataPesanan: !state.openDetailDataPesanan
        })
        )
    }
    ,
    valueDelete: [],
    setValueDelete: (e) => {
        set({ valueDelete: e })
    },
    valueStatusPesanan: [],
    setValueStatusPesanan: (e) => {
        set({ valueStatusPesanan: e })
    }
}))