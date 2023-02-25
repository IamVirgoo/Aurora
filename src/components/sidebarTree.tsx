import React, { useState } from "react";

import style from '../styles/sidebartree.module.css'

import TreeNode from './treeNode'
import * as info from "../devtools/info";

// @ts-ignore
function Menu( { info, margin } ) {
    const [displayChildren, setDisplayChildren] = useState({});
    return <>
        {
            info.map((value : any) => <>
                { value.children != null
                    ? <TreeNode type={"parent"} contentText={value.title} marginLeft={margin} onClick={
                        () => {setDisplayChildren({
                            ...displayChildren, [value.title] : !displayChildren[value.title]
                        })}
                    }/>
                    : <TreeNode contentText={value.title} marginLeft={margin + 20}/>
                }
                {
                    displayChildren[value.title] && value.children && <Menu info = {value.children} margin={20}/>
                }
            </>)
        }
    </>
}

export default function SidebarTree(props : any) {
    return <div className={style.sidebar}>
        <div className={style.content}>
            <Menu info={info.sidebarTreeInfo} margin={0}/>
        </div>
    </div>
}