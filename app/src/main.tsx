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
import FarmerForms from './page/Farmers/AddNewFarmer/FarmerForms';
import Sales_Form from './page/Sales/Sales_Form';
import Confirmation from './page/Farmers/AddNewFarmer/Confirmation';
import StaffForms from './page/Staff_Details/AddNewStaff/StaffForms';
import FpoForm from './page/FPO Details/FPO Form/FpoForm';
import FarmerTable from '@/page/Farmers/Farmer_Display';
import ProductForms from './page/Product_Display/AddNewProduct/ProductForms';
import FpoDisplay from './page/FPO Details/FPO Display/FpoDisplay';
import StakeHolders from './page/StakeHolders/StakeHolderDisplay';




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
                path:'/sales/form',
                element:<Sales_Form/>  
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
            },
            {
                path:'/staff/forms',
                element:<StaffForms/>
            }
        ]
    },
    {
        path: '/farmers',
        element:<Sidebar />,

        children: [
            {
                path:'/farmers',
                element:<FarmerTable/>
            },
            {
                path:'/farmers/forms',
                element:<FarmerForms/>
            },
            {
                path:'/farmers/forms/success',
                element:<Confirmation/>
            }
        ]
    },
    {
        path: '/stakeholders',
        element:<Sidebar />,

        children: [
            {
                path:'/stakeholders',
                element:<StakeHolders/>
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
            },
            {
                path:'/products/forms',
                element:<ProductForms/>
            }
        ]
    },
    {
        path: '/fpo',
        element:<Sidebar/>,
        children:[
            {
                path:'/fpo',
                element:<FpoDisplay/>
            },
            {
                path:'/fpo/edit',
                element:<FpoForm/>
            }
        ]
    },
    {
        path: '/purchase',
        element:<Sidebar/>,
        children:[
            {
                path:'/purchase',
                element:<Purchase_Display/>
            },
            {
                path:'/purchase/form',
                element:<FpoForm/>
            }
        ]
    },
    
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>,
)
