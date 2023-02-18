import {createBrowserRouter} from "react-router-dom";
import AppOutlet from "./layout/AppOutlet";
import ExgausterIndexPage from "./pages/<exgauster>";
import DashboardPage from "./pages/index-dashboard";

// Index page is looking dashboard, otherwise will move to login page
export const Router = createBrowserRouter([
    {
        path : '/',
        element : <AppOutlet/>,
        children: [
            {
                path: '/',
                element: <DashboardPage/>,
            },
            {
                path: ':id',
                element: <ExgausterIndexPage/>
            }
        ]
    },
]);
