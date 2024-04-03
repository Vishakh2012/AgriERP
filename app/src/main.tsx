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
import SalesDisplay from './page/Sales_Display/Sales_Display';
import Product_Display from './page/Product_Display/Product_Display';
import Purchase_Display from './page/Purchase_Display/Purchase_Display';
import Staff_Details from './page/Staff_Details/Staff_Details';




const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: '/home',
    element:<ProtectedRoute><Sidebar /></ProtectedRoute>,

    children: [
      {
        path: '/home',
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
      },
    ],
  },
  {
    path:'/sales',
        element:<ProtectedRoute><Sidebar /></ProtectedRoute>,

    children: [
      {
        path:'/sales',
        element:<ProtectedRoute><SalesDisplay/></ProtectedRoute>
      }
    ]
  },
  {
    path:'/purchase',
    element:<ProtectedRoute><Sidebar/></ProtectedRoute>,
    children: [
      
      {
        path:'/purchase',
        element:<Purchase_Display/>
      }
    ]
  },
  {
    path:'/staff',
        element:<ProtectedRoute><Sidebar /></ProtectedRoute>,

    children: [
      {
        path:'/staff',
        element:<ProtectedRoute><Staff_Details /></ProtectedRoute>
      }
    ]
  },
  {
    path:'/farmers',
        element:<ProtectedRoute><Sidebar /></ProtectedRoute>,

    children: [
      {
        
      }
    ]
  },
  {
    path:'/stakeholders',
        element:<ProtectedRoute><Sidebar /></ProtectedRoute>,

    children: [
      {
        
      }
    ]
  },
  {
    path:'/products',
    children: [
      {
        path:'/products',
        element:<ProtectedRoute><Product_Display/></ProtectedRoute>
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
