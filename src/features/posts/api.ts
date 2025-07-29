import { BASE_URL } from "../../lib/constants.js"
import { fetchUtil } from "../../lib/fetchUtil.js"
import type { PostComment } from "./interface.js"
import type Post from "./interface.js"

export const fetchPosts = ():Promise<Post[]> => fetchUtil(`${BASE_URL}posts`)
export const fetchComments = (postId: string):Promise<PostComment[]> => fetchUtil(`${BASE_URL}/posts/${postId}/comments`)
export const fetchPost = (id: string):Promise<Post> => fetchUtil(`${BASE_URL}posts/${id}`)
