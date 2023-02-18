import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header";
import style from '../styles/AppOutlet.module.css';

export default function AppOutlet() {
    return <>
        <Header/>
        <div className={style.page_outlet}>
            <Outlet/>
        </div>
    </>
}
