import { ChartNoAxesGantt, Users, ListTodo } from "lucide-react";

export const BASE_URL = "https://jsonplaceholder.typicode.com/";


export const overViewMenu = [
  { label: "Dashboard", Icon: ChartNoAxesGantt, path: "/dashboard" },
];

export const usersMenu = [
  { label: "All Users", Icon: Users, path: "/users" },
];

export const todosMenu = [
  { label: "All Todos", Icon: ListTodo, path: "/todos" },
];

export const sidePanelSections = [
  { title: "Overview", items: overViewMenu },
  { title: "Users", items: usersMenu },
  { title: "Todos", items: todosMenu },
];
