import { ChartNoAxesGantt, Users, ListTodo, Check, Clock } from "lucide-react";

export const BASE_URL = "https://jsonplaceholder.typicode.com/";


export const overViewMenu = [
  { label: "Dashboard", Icon: ChartNoAxesGantt},
];

export const usersMenu = [
  { label: "All Users", Icon: Users},
];

export const todosMenu = [
  { label: "All", Icon: ListTodo, endpoint: "/todos" },
  { label: "Completed", Icon: Check, endpoint: "/todos?completed=true" },
  { label: "Pending", Icon: Clock, endpoint: "/todos?completed=false" },
];

export const sidePanelSections = [
  { title: "Overview", items: overViewMenu },
  { title: "Users", items: usersMenu },
  { title: "Todos", items: todosMenu },
];
