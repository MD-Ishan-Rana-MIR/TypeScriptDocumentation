import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout/>,
        children : [
            {
                path : "/",
                element : <h1>Home page</h1>
            }
        ]
    }
])