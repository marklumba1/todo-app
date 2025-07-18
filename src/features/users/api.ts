import { BASE_URL } from "../../lib/constants"
import { fetchUtil } from "../../lib/fetchUtil"
import type { User } from "./interface"

export const fetchUsers = (): Promise<User[]> => {
    return fetchUtil(`${BASE_URL}users`)
}