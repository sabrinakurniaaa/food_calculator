import {create} from "zustand";

export const useNutritionsPreview = create((set) => ({
    nutritions: [],
    setNutritions: (nutritions) => set((state) => ({nutritions})),
    updateNutrition: (index, key, value) => set((state) => {
        return {
            nutritions: state.nutritions.map((item, i) => {
                if (i === index) {
                    return {...item, [key]: value};
                }
                return item;
            })
        };
    })
}));

