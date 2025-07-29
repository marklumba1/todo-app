import { useQuery } from "@tanstack/react-query";
import type Post from "../../features/posts/interface";
import type { PostComment } from "../../features/posts/interface";
import Avatar from "../avatar/Avatar";
import { useParams, Link } from "react-router-dom";
import { fetchComments, fetchPost } from "../../features/posts/api";
import { useStore } from "../../store/useStore";
import { fetchUsers } from "../../features/users/api";
import { useEffect } from "react";
import { ArrowLeftCircle } from "lucide-react";
import Comment from "./Comment";

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const users = useStore((state) => state.users);
  const setUsers = useStore((state) => state.setUsers);

  const { data, isLoading, error, isError } = useQuery<Post>({
    queryKey: ["post", id],
    queryFn: () => fetchPost(id!),
    enabled: !!id,
  });

  const { data: postComments, isLoading: loadingPostComments } = useQuery<
    PostComment[]
  >({
    queryKey: ["comments"],
    queryFn: () => fetchComments(id!),
    enabled: !!id,
  });

  const { data: usersData } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    enabled: users.length === 0, // only fetch if store is empty
  });

  useEffect(() => {
    if (usersData && users.length === 0) {
      setUsers(usersData);
    }
  }, [usersData, users, setUsers]);

  const user = users.find((user) => user.id === data?.userId);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{`${error}`}</p>;
  if (!data) return <p>No data found.</p>;

  return (
    <div className="border border-slate-600 p-3 rounded-2xl flex flex-col">
      <div className="flex items-center gap-3">
        <Avatar name={user?.name} />
        <div>
          <h1 className="font-bold">{user?.name}</h1>
          <p className="text-sm">{user?.email}</p>
        </div>
        <Link
          to={"/posts"}
          className="ml-auto text-slate-600 hover:scale-130 transition"
        >
          <ArrowLeftCircle size={30} />
        </Link>
      </div>

      <h1 className=" font-bold pt-3">{data.title}</h1>
      <p className="text-sm pt-2">{data.body}</p>
      <div className="text-sm pt-3 flex flex-col w-full gap-1 mt-auto">
        <div className=" border-b-1 border-slate-300 text-xs py-2 mb-2 cursor-pointer">
          {postComments?.length} Comments
        </div>
        <div className="flex flex-col gap-4">
          {loadingPostComments || !postComments ? (
            <p>Loading comments...</p>
          ) : (
            postComments.map((comment) => <Comment comment={comment} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
