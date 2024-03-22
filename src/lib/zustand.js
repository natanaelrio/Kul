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
    openPencarian: false,
    setOpenPencarian: () => {
        set((state) => ({
            openPencarian: !state.openPencarian
        })
        )
    },
    openIsScrollPast: false,
    setOpenIsScrollPast: (e) => {
        set((state) => ({
            openIsScrollPast: e
        })
        )
    },
    openFormPilihan: false,
    setOpenFormPilihan: () => {
        set((state) => ({
            openFormPilihan: !state.openFormPilihan
        })
        )
    },
    openFormKeranjang: false,
    setOpenFormKeranjang: () => {
        set((state) => ({
            openFormKeranjang: !state.openFormKeranjang
        })
        )
    },
    openFormEditKeranjang: false,
    setOpenFormEditKeranjang: () => {
        set((state) => ({
            openFormEditKeranjang: !state.openFormEditKeranjang
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
