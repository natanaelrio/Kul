import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStoreDataFront = create(
    persist(
        (set, get) => ({

            loveZ: [],
            setdataLoveZ: (loveZ) => {
                set({ loveZ: [...new Set(loveZ.reverse())] })
            },
            setDeleteLoveZ: (data, e) => {
                set({ loveZ: data.filter((todo) => todo.id !== e) })
            },

            keranjangZ: [],
            setdataKeranjangZ: (keranjangZ) => {
                set({ keranjangZ: [...new Set(keranjangZ.reverse())] })
            },
            setDeleteKeranjangZ: (data, e) => {
                set({ keranjangZ: data.filter((todo) => todo.id !== e) })
            },
            setdataKeranjangCountZ: (keranjangZ) => {
                set({ keranjangZ: keranjangZ })
            }
            

        }),
        {
            name: 'shop-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by def
        },
    ),
)
