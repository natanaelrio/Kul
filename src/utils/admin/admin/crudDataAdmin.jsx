import { create } from 'zustand'

export const useStoreCRUDadmin = create((set) => ({
    setDataAdmin: {},
    getDataAdmin: async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/admin/get`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.NEXT_PUBLIC_SECREET
                },
                next: { revalidate: 0 }
            })

            const data = await res.json()
            set({ setDataAdmin: await data })
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
    }
}))