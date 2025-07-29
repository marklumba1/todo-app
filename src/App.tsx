import Dashboard from "./components/dashboard/Dashboard";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Panel from "./components/panel/Panel";
import { sidePanelSections } from "./lib/constants";
import UserList from "./components/users/UsersList";
import { TodoList } from "./components/todos/TodoList";
import { PostList } from "./components/posts/PostList";
import PostDetails from "./components/posts/PostDetails";
import Nav from "./components/nav/Nav";
const App = () => {
  return (
    <>
      <Nav />
      <div className="flex ">
        <div>
          <Panel sections={sidePanelSections} />
        </div>
        <div className="h-calc overflow-y-scroll w-full p-5">
          <Routes>
            <Route path="/" element={<Navigate to={"/posts"} />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/todos" element={<TodoList />} />
            <Route
              path="*"
              element={
                <>
                  <p>No matched URL</p>
                  <Link to={"/"} className=" underline">
                    Back
                  </Link>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
