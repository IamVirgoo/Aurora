import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import style from './AppOutlet.module.css';

export default function AppOutlet() {
    return <>
        <Navbar/>
        <div className={style.page_outlet}>
            <Outlet/>
        </div>
    </>
}
