import { Link } from 'react-router-dom'

import Bearing from './bearing'

import style from '../styles/exhauster.module.css'

export default function Exhauster(props : any) {
     return <div className={style.exhauster}>
        <div className={style.exhausterContent}>
            <div className={style.exhausterHeading}>
                <div className={style.exhausterHeadingTop}>
                    <p className={style.exhausterTitle}>{props.exhausterName || "Эксгаустер У-171"}</p>
                    <Link to={props.exhausterId ? props.exhausterId : "/0"} className={style.exhausterHeadingTopInfo}>i</Link>
                </div>
                <div className={style.line}></div>
                <p className={style.exhausterTitle}>{props.rotorName || "Ротор №35к"}</p>
                <div className={style.line}></div>
            </div>
            <div className={style.exhausterLastChange}>
                <p className={style.exhausterTitle}>Последняя замена ротора</p>
                <div className={style.exhausterLastChangeDateWrapper}>
                    <p className={style.exhausterLastChangeDate}>{props.exhausterLastChangeData || "6 сут"}</p>
                </div>
            </div>
            <div className={style.line}></div>
            <div className={style.warnings}>
                <p className={style.exhausterTitle}>Предупреждения</p>
                <div className={style.exhausterWarnings}>
                    {
                        props.warnings.map((value : any) => <>
                            <Bearing bearingName={value.bearingName}/>
                        </>)
                    }
                </div>
            </div>
            <div className={style.line}></div>
            <div className={style.bearings}>
                <p className={style.exhausterTitle}>Подшипники</p>
                <div className={style.exhausterWarnings}>
                    {
                        props.info.map((value : any) => <>
                            <Bearing bearingName={value.bearingName}/>
                        </>)
                    }
                </div>
            </div>
        </div>
     </div>
}