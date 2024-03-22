import {create} from "zustand";

const useTableEdit = create((set) => ({
    isEdit: false,
    setEdit: () => set((state) => ({isEdit: true})),
    disableEdit: () => set((state) => ({isEdit: false}))
}))


export default useTableEdit;
