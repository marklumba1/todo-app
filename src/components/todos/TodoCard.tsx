import { useState } from "react";
import type Todo from "../../features/todos/interface";
import { useStore } from "../../store/useStore";

interface TodoCardProps {
  todo: Todo;
  isMouseOnParent: boolean;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo, isMouseOnParent }) => {
  const users = useStore((state) => state.users);
  const currentUser = users.find((user) => user.id === todo.userId);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        ${isMouseOnParent ? (isHovered ? "opacity-100" : "opacity-50") : ""}
    flex  flex-col gap-2 border bg-slate-200 transition p-3 rounded-xl relative overflow-clip hover:scale-105 hover:z-20`}
    >
      <div
        className={`${
          todo.completed ? "bg-green-600" : "bg-red-600"
        } absolute top-0 bottom-0 right-0 w-3`}
      ></div>
      <p>Todo ID: {todo.id}</p>
      <h1 className="text-lg font-bold">{todo.title}</h1>
      <p>By: {currentUser?.name}</p>
      <p className="flex items-center gap-2 mt-auto">
        Status:
        <span
          className={`${
            todo.completed ? "bg-green-600" : "bg-red-600"
          } px-1 rounded py-0.5 text-xs text-white`}
        >
          {todo.completed ? "Complete" : "Incomplete"}
        </span>
      </p>
    </div>
  );
};

export default TodoCard;
