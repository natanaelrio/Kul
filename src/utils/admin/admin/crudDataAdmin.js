import { create } from 'zustand'

export const useStoreCRUDadmin = create((set) => ({
    dataAdminProduk: [],
    fetchDataAdminProduk: async (e) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/get?cari=${e ? e : ' '}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.NEXT_PUBLIC_SECREET
                },
                next: { revalidate: 0 }
            })

            const data = await res.json()
            set({ dataAdminProduk: data })
        }
        catch (e) { console.error(e); }
    },
    handleDelete: async (e) => {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/delete`, {
                method: 'DELETE',
                // data: e,
                body: JSON.stringify(e),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.NEXT_PUBLIC_SECREET
                }
            })
        }
        catch (e) {
            console.error(e)
        }
    },
    dataPesanan: [],
    take: '',
    skip: '',
    cariPesanan: '',
    setDataPesanan: (e) => {
        set({ dataPesanan: e })
    },
    setTakePesanan: (e) => {
        set({ take: e })
    },
    setSkipPesanan: (e) => {
        set({ skip: e })
    },
    setCariPesanan: (e) => {
        set({ cariPesanan: e })
    },

    dataListProduct: [],
    setDataListProduct: (e) => {
        set({ dataListProduct: e })
    },

}))