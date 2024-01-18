import { create } from 'zustand'

export const useStoreListDataProduct = create((set) => ({

    datalist: {},
    fetchdatalist: async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/get-listdata`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.NEXT_PUBLIC_SECREET
            },
            next: { revalidate: 0 }
        })
        set({ datalist: await res.json() })
    },


    datasearch: {},
    fetchdatasearch: async (e, sortby) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/search-page-all?cari=${e}&sortby=${sortby == null ? '' : sortby}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.NEXT_PUBLIC_SECREET
            },
            next: { revalidate: 0 }
        })
        set({ datasearch: await res.json() })
    },
}))


