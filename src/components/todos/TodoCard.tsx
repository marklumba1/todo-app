import type Todo from "../../features/todos/interface";

interface TodoCardProps {
    todo: Todo
}

const TodoCard: React.FC<TodoCardProps> = ({todo}) => {
    return (
    <div className="border border-slate-100">
        <h1>{todo.title}</h1>
        
        {todo.completed ? "Completed" : ""} 
    </div>
    )
}

export default TodoCard