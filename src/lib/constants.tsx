import { Users, ListTodo, TableOfContents } from "lucide-react";

export const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const usersMenu = [
  { label: "Users", Icon: Users, path: "/users" },
];

export const todosMenu = [
  { label: "Todos", Icon: ListTodo, path: "/todos" },
];
export const contentMenu = [
  { label: "Posts", Icon: TableOfContents, path: "/posts" },
];

export const sidePanelSections = [
  { title: "Content", items: contentMenu },
  { title: "Users", items: usersMenu },
  { title: "Todos", items: todosMenu },
];
