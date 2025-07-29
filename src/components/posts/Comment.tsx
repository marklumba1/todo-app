import { useState } from "react";
import type { PostComment } from "../../features/posts/interface";
import Avatar from "../avatar/Avatar";

interface CommentProps {
  comment: PostComment;
}
const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [showAllText, setShowAllText] = useState(false);
  const commentText =
    comment.body.length > 100 && !showAllText
      ? `${comment.body.slice(0, 100)}...`
      : comment.body;
  return (
    <div className="flex gap-2">
      <Avatar name={comment.name} size={30} />
      <div className="flex flex-col">
        <p className="uppercase font-bold tracking-wide">
          {comment.name.split(" ").slice(0, 2).join(" ")}
        </p>
        <p>{comment.email}</p>

        <div className="mt-2">
          <p>{commentText}</p>
           {comment.body.length > 100 && (
              <button
                onClick={() => setShowAllText(!showAllText)}
                className="font-bold cursor-pointer bg-slate-100 rounded py-0.5 px-2 mt-1 text-xs"
              >
                {!showAllText ? `READ MORE` : `HIDE`}
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
