import { create } from 'zustand'

export const useKeranjangCount = create((set) => ({
    // COUNT KERANJANG
    ValueKeranjang: 1,
    setKurangValueKeranjang: () => {
        set((state) => ({
            ValueKeranjang: state.ValueKeranjang > 1 ? state.ValueKeranjang - 1 : null
        }))
    },
    setTambahValueKeranjang: (e) => {
        set((state) => ({
            ValueKeranjang: state.ValueKeranjang >= e ? null : state.ValueKeranjang + 1
        }))
    },
    resetValueKeranjang: () => set({ ValueKeranjang: 1 })

}))
