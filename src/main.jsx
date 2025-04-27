import { StrictMode } from 'react'
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
  path:'/login',
  Component:Login
},
{
  path:'Reg',
  Component:Reg
}

    ]
  },
]); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
 <RouterProvider router={router} />
  </StrictMode>,
)
