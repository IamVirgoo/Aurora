import style from '../styles/bearing.module.css';
import BearingIndicator from "./bearingIndicator";

export default function Bearing(props : any) {
    return <div className={style.bearing}>
        <p className={style.bearingName}>{props.bearingName || "№1 п-к"}</p>
        <div className={style.bearingIndicators}>
            <BearingIndicator type={"radio"}/>
            <BearingIndicator/>
        </div>
    </div>
}