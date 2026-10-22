import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ErrorBoundary } from "./ErrorPage.jsx";
import Layout from "./Layout/Layout.jsx";
import User from "./User.jsx";
import { DataProvider } from "./DataContext.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
       {
        path: "/home",
        element: <div>Welcome Homepage</div>,
      },
      {
        path: "/login",
        element: <div>Welcome Login</div>,
      },
      {
        path: "/register",
        element: <div>Welcome Register</div>,
      },
       {
        path: "/user/:id",
        element: <User/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
);
