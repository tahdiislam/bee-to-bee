import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SearchProduct from "../pages/SearchProduct/SearchProduct";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main/>, children: [
            {
                path: '/', element: <Home/>
            },
            {
                path: '/search-product', element: <SearchProduct/>
            }
        ]
    }
])