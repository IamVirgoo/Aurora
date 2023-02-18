import { Link } from 'react-router-dom';

import style from '../styles/header.module.css'

export default function Header() {
    return <header className={style.header}>
        <div className={style.container}>
            <div className={style.container__left}>
                <h1 className={style.container__leftTitle}>FOCO</h1>
                <Link to={''} className={style.container__leftNavigation}>/  Панель управления</Link>
            </div>
            <div className={style.container__right}>
                <Link to={''} className={style.container__rightButton}>Справочник</Link>
                <div className={style.container__rightWrapper}>
                    <img src="" alt="" className={style.container__rightUserImage}/>
                </div>
            </div>
        </div>
    </header>;
}