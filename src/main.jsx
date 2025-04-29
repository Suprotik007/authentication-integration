import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layouts/Root.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Reg from './Reg.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Orders from './Layouts/Orders.jsx';
import Profile from './Layouts/Profile.jsx';
import PrivateRoute from './Layouts/PrivateRoute.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
{
  index:true,
  Component:Home
},
{
  path:'login',
  Component:Login
},
{
  path:'Reg',
  Component:Reg
},
{
  path:'orders',
  // Component:Orders
  element: <PrivateRoute><Orders></Orders></PrivateRoute>
},
{
  path:'profile',
  // Component:Profile
  element:<PrivateRoute><Profile></Profile></PrivateRoute>
}

    ]
  },
]); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    

<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>

  </StrictMode>,
)
