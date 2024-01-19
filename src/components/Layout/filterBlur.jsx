import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useStore } from '@/lib/zustand'

export default function FilterBlur() {
    useLockBodyScroll()

    const setOpenFilter = useStore((state) => state.setOpenFilter)
    return (
        <div className="hilangkan" onClick={setOpenFilter}></div>
    )
}
