import { createRoot } from "react-dom/client";
import "./styles/global.css";
import React from "react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root")!;
const queryClient = new QueryClient();

createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>
);
