//added zustand for future use of store
//currently not being used

import { create } from "zustand";
import type { User } from "../features/users/interface";

export interface AppState {
    users: User[] | undefined,
    setUsers: (users: User[]) => void
}

export const useStore = create<AppState>((set) =>({
    users: undefined,
    setUsers: (users) => set({users})
}))