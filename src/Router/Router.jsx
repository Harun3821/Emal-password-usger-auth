import { createBrowserRouter } from "react-router-dom";
import Root from "../Componte/Root.jsx/Root";
import Home from "../Pagess/Home";
import Loing from "../Pagess/Loing";
import Regster from "../Pagess/Regster";


export const router = createBrowserRouter([
{
    path:'/',
    element:<Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/loing',
            element:<Loing></Loing>
        },
        {
            path:'/regster',
            element:<Regster></Regster>,
        }
    ]
}   

])