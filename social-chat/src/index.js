import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./components/App.js";
import Chats from "./components/Chats";
import Login from "./components/Login.js";
import './index.css';

//======================================================================================
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "chats", element: <Chats /> },
    ],
  },
]);

//======================================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

