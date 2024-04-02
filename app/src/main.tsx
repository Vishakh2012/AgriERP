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
import ProtectedRoute from './page/Login/ProtectedRoute';
import { AuthProvider } from './page/Login/AuthContext';




const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: '/home',
    element: <Sidebar />,
    children: [
      {
        path: '/home',
        element: <Dashboard />,
      },
    ],
  },
  {
    path:'/sales',
    element:<Sidebar />,
    children: [
      {
      }
    ]
  },
  {
    path:'/purchase',
    element:<Sidebar/>,
    children: [
      {
        
      }
    ]
  },
  {
    path:'/staff',
    element:<Sidebar/>,
    children: [
      {
        
      }
    ]
  },
  {
    path:'/farmers',
    element:<Sidebar/>,
    children: [
      {
        
      }
    ]
  },
  {
    path:'/stakeholders',
    element:<Sidebar/>,
    children: [
      {
        
      }
    ]
  },
  {
    path:'/products',
    element:<Sidebar/>,
    children: [
      {
        
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
