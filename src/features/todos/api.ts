import { BASE_URL } from "../../lib/constants.js"
import { fetchUtil } from "../../lib/fetchUtil.js"
import type Todo from "./interface.js"

export const fetchTodos = ():Promise<Todo[]> => fetchUtil(`${BASE_URL}todos`)
