import {create} from "zustand";

export const useNutritionEdit = create((set) => ({
    nutritions: [],
    setNutritions: (nutritions) => set((state) => ({nutritions})),
    changedNutritions: [],

    updateNutrition: (id, key, value) => set((state) => {
        const existingNutritionIndex = state.changedNutritions.findIndex(nutrition => nutrition.id === id);
        if (existingNutritionIndex !== -1) {
            // Jika id sudah ada, perbarui objek yang ada
            return {
                changedNutritions: state.changedNutritions.map((nutrition, index) => {
                    if (index === existingNutritionIndex) {
                        return {...nutrition, [key]: value};
                    }
                    return nutrition;
                }),
                nutritions: state.nutritions.map((item, i) => {
                    if (item.id === id) {
                        return {...item, [key]: value};
                    }
                    return item;
                })
            }
        } else {
            // Jika id tidak ada, tambahkan objek baru ke array
            return {
                changedNutritions: [...state.changedNutritions, {id, [key]: value}],
                nutritions: state.nutritions.map((item, i) => {
                    if (item.id === id) {
                        return {...item, [key]: value};
                    }
                    return item;
                })
            }
        }
    })
}));
