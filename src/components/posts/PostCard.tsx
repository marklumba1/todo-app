import { useState } from "react";
import type Post from "../../features/posts/interface";
import CommentList from "./Comment";
import type { Comment } from "../../features/posts/interface";
import type { User } from "../../features/users/interface";
import Avatar from "../avatar/Avatar";

interface PostCardProps {
  post: Post;
  postComments: Comment[];
  user: User | undefined;
}

const PostCard: React.FC<PostCardProps> = ({ post, postComments, user }) => {
  return (
    <div className="border border-[#5A6ACF] p-3 rounded-2xl flex flex-col">
      <div className="flex items-center gap-3">
        <Avatar name={user?.name} />
        <div>
          <h1 className="font-bold">{user?.name}</h1>
          <p className="text-sm">{user?.email}</p>
        </div>
      </div>

      <h1 className=" font-bold pt-3">{post.title}</h1>
      <p className="text-sm pt-2">{post.body}</p>
      <div className="text-sm pt-3 flex flex-col w-full gap-1 mt-auto">
        <div
          className=" border-b-1 border-slate-300 text-xs py-2 mb-2 cursor-pointer"
        >
          {postComments.length} Comments
        </div>
        <button
          className="text-sm p-2 rounded-xl"
        >
         View Post
        </button>
      </div>
    </div>
  );
};

export default PostCard;
