import {createBrowserRouter} from "react-router-dom";
import IndexPage from "./pages/indexPage";
import AppOutlet from "./layout/AppOutlet";
import AdminIndex from "./pages/admin/adminIndex";
import ExhausterTrends from "./pages/admin/exhausterTrends";

export const Router = createBrowserRouter([
    {
        path : '/',
        index : true,
        element : <IndexPage/>
    },
    {
        path: 'admin/',
        element : <AppOutlet/>,
        children : [
            {
                index : true,
                element : <AdminIndex/>
            },
            {
                path : 'trends',
                element : <ExhausterTrends/>
            }
        ]
    }
])
