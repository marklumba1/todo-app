//added zustand for future use of store
//currently not being used

import { create } from "zustand";
import type { User } from "../features/users/interface";
import type { PostComment } from "../features/posts/interface";

export interface AppState {
    users: User[] | [],
    comments: PostComment[] | [],
    setUsers: (users: User[]) => void
    setComments: (comments: PostComment[]) => void
}

export const useStore = create<AppState>((set) =>({
    users: [],
    comments: [],
    setUsers: (users) => set({users}),
    setComments: (comments) => set({comments})
}))