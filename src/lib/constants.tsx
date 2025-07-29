import { ChartNoAxesGantt, Users, ListTodo, TableOfContents, Album } from "lucide-react";

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
export const contentMenu = [
  { label: "Posts", Icon: TableOfContents, path: "/posts" },
];

export const sidePanelSections = [
  { title: "Content", items: contentMenu },
  { title: "Users", items: usersMenu },
  { title: "Todos", items: todosMenu },
  { title: "Overview", items: overViewMenu },
];
