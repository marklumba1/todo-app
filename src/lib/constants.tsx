import { ChartNoAxesGantt, Users, ListTodo, TableOfContents } from "lucide-react";

export const BASE_URL = "https://jsonplaceholder.typicode.com/";

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
];
