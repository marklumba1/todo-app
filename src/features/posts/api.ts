import { BASE_URL } from "../../lib/constants.js"
import { fetchUtil } from "../../lib/fetchUtil.js"
import type { Comment } from "./interface.js"
import type Post from "./interface.js"

export const fetchPosts = ():Promise<Post[]> => fetchUtil(`${BASE_URL}posts`)
export const fetchComments = ():Promise<Comment[]> => fetchUtil(`${BASE_URL}comments`)
