import { create } from "zustand";

export interface AppState {
    activePanel: string,
    setActivePanel: (panel: string) => void
}

export const useStore = create<AppState>((set) =>({
    activePanel: "All Users",
    setActivePanel: (panel) => set({activePanel: panel})
}))