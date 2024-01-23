import { create } from 'zustand'

export const useStoreListDataProduct = create((set) => ({

    // List UMUM
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/get-search?cari=${e}&sortby=${sortby == null ? '' : sortby}`, {
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
    fetchdatasearchfilter: async (e, sortby) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/user-front/get-search?cari=${e}&sortby=${sortby == null ? '' : sortby}`, {
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


