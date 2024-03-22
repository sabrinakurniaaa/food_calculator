import {create} from "zustand";

const useNutritions = create((set) => ({
    nutritions: [],
    setNutritions: (nutritions) => set((state) => ({nutritions})),
    addNutrition: (nutrition) => set((state) => ({nutritions: [...state.nutritions, nutrition]})),
    deleteNutrition: (id) => set((state) => ({nutritions: state.nutritions.filter((nutrition) => nutrition.id !== id)})),
    updateNutrition: (nutrition) => set((state) => ({nutritions: state.nutritions.map((item) => item.id === nutrition.id ? nutrition : item)}))
}))
