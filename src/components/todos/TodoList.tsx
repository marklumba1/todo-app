import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../../features/todos/api";
import TodoCard from "./TodoCard";
import type Todo from "../../features/todos/interface";

export const TodoList:React.FC = () => {
  const { data, isError, isLoading, error } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  if (!data) return <p>No data found.</p>;
  return (
    <div className="grid grid-cols-3 gap-3">
      {data.map((todo) => (
        <TodoCard todo={todo} />
      ))}
    </div>
  );
};
