import style from '../styles/algomachine.module.css';
import Exhauster from './exhauster';
import * as info from "../devtools/info";

export default function Algomachine(props : any) {
    return <div className={style.algomachine}>
        <h2 className={style.algomachineTitle}>{props.algomachineTitle || "Алгомашина №1"}</h2>
        <div className={style.algomachineExhausters}>
            {
                props.info.map((value: any) => <>
                    <Exhauster
                        exhausterId={value.exhausterId}
                        exhausterName={value.exhausterName}
                        rotorName={value.rotorName}
                        exhausterLastChangeData={value.lastChangeData}
                        info={value.bearings}
                        warnings={value.warnings}
                    />
                </>)
            }
        </div>
    </div>
}