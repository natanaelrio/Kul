import { create } from 'zustand'

export const useStoreDataFront = create((set) => ({

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
    fetchdatasearch: async (e) => {
        // console.log('ZUZ',e);
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/search-all?cari=${value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.NEXT_PUBLIC_SECREET
            },
            next: { revalidate: 0 }
        })
        set({ datasearch: await res.json() })
    },

    loveZ: [],
    setdataLoveZ: (loveZ) => {
        set({ loveZ: [...new Set(loveZ)] })
    },

    keranjangZ: [],
    setdataKeranjangZ: (keranjangZ) => {
        set({ keranjangZ: [...new Set(keranjangZ)] })
    }

}))