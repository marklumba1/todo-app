import { useState } from "react";
import type { Comment } from "../../features/posts/interface";
import Avatar from "../avatar/Avatar";

interface CommentListProps {
  comment: Comment;
}
const CommentList: React.FC<CommentListProps> = ({ comment }) => {
  const [showAllText, setShowAllText] = useState(false);
  const commentText =
    comment.body.length > 150 && !showAllText
      ? `${comment.body.slice(0, 150)}...`
      : comment.body;
  console.log(comment);
  return (
    <div className="text-xs flex gap-2">
      <Avatar name={comment.name} size={30} />
      <div className="flex flex-col">
        <p className="uppercase">
          {comment.name.split(" ").slice(0, 2).join(" ")}
        </p>
        <p className="text-[12px]">{comment.email}</p>

        <div className="flex mt-1">
          <p>
            {commentText}{" "}
             { comment.body.length > 150 &&
            <span
              onClick={() => setShowAllText(!showAllText)}
              className="text-gray-800 font-bold cursor-pointer text-[10px] hover:"
            >
              {!showAllText ? `READ MORE` : `HIDE`}
            </span>
}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
