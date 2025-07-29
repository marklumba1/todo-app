import { useQuery } from "@tanstack/react-query";
import type Post from "../../features/posts/interface";
import { fetchComments, fetchPosts } from "../../features/posts/api";
import PostCard from "./PostCard";
import type { Comment } from "../../features/posts/interface";
import type { User } from "../../features/users/interface";
import { fetchUsers } from "../../features/users/api";
import { useStore } from "../../store/useStore";
import { useEffect } from "react";

export const PostList: React.FC = () => {
  const {
    data: posts,
    isLoading: postsLoading,
    error: postsError,
  } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const {
    data: comments,
    isLoading: commentsLoading,
    error: commentsError,
  } = useQuery<Comment[]>({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });

  const {
    data: users,
    isLoading: usersLoading,
    error: usersError,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

    const setUsers = useStore(users => users.setUsers)

  useEffect(() => {
    if (users) setUsers(users)
  }, [users])

  // We're fetching all users and comments because JSONPlaceholder (jsonplaceholder.typicode.com)
  // does not provide details per post in the /posts response.
  // This allows us to manually relate data to posts by filtering on postId.

  if (postsLoading || commentsLoading || usersLoading) return <p>Loading...</p>;
  if (postsError) return <p>{postsError.message}</p>;
  if (commentsError) return <p>{commentsError.message}</p>;
  if (usersError) return <p>{usersError.message}</p>;
  if (!posts || !comments || !users) return <p>No data found.</p>;



  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post) => (
        <PostCard
          post={post}
          key={post.id}
          postComments={comments.filter(
            (comment) => comment.postId === post.id
          )}
          user={users.find((user) => user.id === post.userId)}
        />
      ))}
    </div>
  );
};
