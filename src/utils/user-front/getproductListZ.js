import { create } from 'zustand'

export const useStoreListDataProduct = create((set) => ({

    // List UMUM
    datalist: [],
    fetchdatalist: async (sortby, take) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/get-listdata?sortby=${sortby == null ? '' : sortby}&take=${take ? take : 8}`, {
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
    fetchdatasearch: async (search, take) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/get-search?cari=${search}&take=${take ? take : 0}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.NEXT_PUBLIC_SECREET
            },
            next: { revalidate: 0 }
        })
        set({ datasearch: await res.json() })
    },

    datasearchfilter: {},
    fetchdatasearchfilter: async (search, sortby, take) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/get-search?cari=${search}&sortby=${sortby == null ? '' : sortby}&take=${take ? take : 8}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.NEXT_PUBLIC_SECREET
            },
            next: { revalidate: 0 }
        })
        set({ datasearchfilter: await res.json() })
    },

    // LIST PESANAN
    datalistpesanan: {},
    fetchdatalistpesanan: async (take, skip, nota, status) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/get-pesanan?nota=${nota ? nota : ''}&take=${take}&skip=${skip}&status=${status}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.NEXT_PUBLIC_SECREET
                },
                next: { revalidate: 0 }
            })
            set({ datalistpesanan: await res.json() })
        }
        catch (e) {
            console.error(e);
        }
    },
}))


