import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStoreFormUsers = create(
    persist(
        (set, get) => ({

            namaLengkap: '',
            setnamaLengkap: (e) => set({ namaLengkap: e }),
            noHP: '',
            setNoHP: (e) => set({ noHP: e }),
            alamat: '',
            setAlamat: (e) => set({ alamat: e }),
            kodePost: '',
            setKodePost: (e) => set({ kodePost: e }),


        }),
        {
            name: 'FormUsers', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by def
        },
    ),
)
