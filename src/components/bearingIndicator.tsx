import style from '../styles/indicator.module.css';
import Radio from "../icons/radio";
import Temperature from "../icons/temperature";

export default function BearingIndicator(props : any) {
    return <div className={style.indicator}>
        { props.type == "radio"
            ? <>
                <p className={style.indicatorText}>{props.indicatorText || "V"}</p>
                <Radio />
            </>
            : <>
                <p className={style.indicatorText}>{props.indicatorText || "T"}</p>
                <Temperature />
            </>
        }
    </div>
}