import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../../features/todos/api";
import TodoCard from "./TodoCard";
import type Todo from "../../features/todos/interface";
import { useState } from "react";

export const TodoList: React.FC = () => {
  const { data, isError, isLoading, error } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  if (!data) return <p>No data found.</p>;

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      onMouseLeave={() => setIsMouseEnter(false)}
      onMouseEnter={() => setIsMouseEnter(true)}
    >
      {data.map((todo) => (
        <TodoCard todo={todo} key={todo.id} isMouseOnParent={isMouseEnter} />
      ))}
    </div>
  );
};
