import style from "../styles/treenode.module.css";

import Checkbox from "./checkbox";

import arrow from "../assets/arrow.svg";

// @ts-ignore
export default function TreeNode(props : any) {
    return <>
        { props.type == "parent"
            ? <div className={style.parentWrapper} style={{marginLeft : props.marginLeft}}>
                <div className={style.contentParent}>
                    <img src={arrow} alt="" onClick={props.onClick}/>
                </div>
                <div className={style.contentRight}>
                    <p className={style.contentText}>{props.contentText || "Текст"}</p>
                </div>
            </div>
            : <div className={style.childWrapper} style={{marginLeft : props.marginLeft}}>
                <div className={style.contentLeft}>
                    <Checkbox/>
                </div>
                <div className={style.contentRight}>
                    <p className={style.contentText}>{props.contentText || "Текст"}</p>
                </div>
            </div>
        }
    </>
}