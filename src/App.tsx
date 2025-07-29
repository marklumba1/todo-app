import Dashboard from "./components/dashboard/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Panel from "./components/panel/Panel";
import { sidePanelSections } from "./lib/constants";
import UserList from "./components/users/UsersList";
import { TodoList } from "./components/todos/TodoList";
const App = () => {
  return (
    <div className="h-dvh flex ">
      <div>
        <Panel sections={sidePanelSections} />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to={"/dashboard"} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
