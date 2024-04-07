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
import SalesDisplay from './page/Sales/Sales_Display';
import Product_Display from './page/Product_Display/Product_Display';
import Purchase_Display from './page/Purchase_Display/Purchase_Display';
import Staff_Details from './page/Staff_Details/Staff_Details';
import Farmers from './page/Farmers/Forms';
import FarmerForms from './page/Farmers/FarmerForms';

import Sales_Form from './page/Sales/Sales_Form';




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
                element:<Dashboard />,
            },
        ],
    },
    {
        path: '/sales',
        element: <Sidebar />,

        children: [
            {
                path: '/sales',
                element:<SalesDisplay />
            },
            {
                
            }
        ]
    },
    {
        path: '/purchase',
        element:<Sidebar />,
        children: [

            {
                path: '/purchase',
                element: <Purchase_Display />
            }
        ]
    },
    {
        path: '/staff',
        element: <Sidebar />,

        children: [
            {
                path: '/staff',
                element:<Staff_Details />
            }
        ]
    },
    {
        path: '/farmers',
        element:<Sidebar />,

        children: [
            {
                path:'/farmers',
                element:<FarmerForms/>
            },
        ]
    },
    {
        path: '/stakeholders',
        element:<Sidebar />,

        children: [
            {

            }
        ]
    },
    {
        path: '/products',
        element:<Sidebar />,

        children: [
            {
                path: '/products',
                element:<Product_Display />
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
