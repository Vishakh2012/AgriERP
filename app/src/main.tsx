import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Sidebar from './components/SidePanel/sidePanel';
import Dashboard from './page/Dashboard/Dashboard';
import LoginPage from './page/Login/Login';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: '/home',
    element: <Sidebar/>,
    children: [
      {
        path:'/home',
        element:<Dashboard/>
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
