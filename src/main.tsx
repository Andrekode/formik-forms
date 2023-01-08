import React from "react";
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
const container = document.getElementById('root');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />)
