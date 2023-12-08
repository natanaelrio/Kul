import { create } from 'zustand'

export const useStore = create((set) => ({
    open: false,
    setOpen: () => {
        set((state) => ({
                open: !state.open
            })
        )
    }
}))
