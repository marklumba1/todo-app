import type Post from "../../features/posts/interface";
import type { User } from "../../features/users/interface";
import Avatar from "../avatar/Avatar";
import { Link } from "react-router-dom";

interface PostCardProps {
  post: Post;
  user: User | undefined;
}

const PostCard: React.FC<PostCardProps> = ({ post, user }) => {
  return (
    <div className="border border-slate-600 p-3 rounded-2xl flex flex-col">
      <div className="flex items-center gap-3">
        <Avatar name={user?.name} />
        <div>
          <h1 className="font-bold">{user?.name}</h1>
          <p className="text-sm">{user?.email}</p>
        </div>
      </div>
      <h1 className="text-lg font-bold pt-3">{post.title}</h1>
      <p className="text-sm pt-2">{post.body}</p>
      <div className="pt-3 flex flex-col w-full gap-1 mt-auto">
        <Link
          to={`/posts/${post.id}`}
          className="text-center p-2 rounded-xl bg-slate-300 hover:bg-slate-200 transition"
        >
          View Post
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
