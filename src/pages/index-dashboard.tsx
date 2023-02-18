import Algomachine from "../components/algomachine";

import style from "../styles/index.module.css";

import * as info from "../devtools/info";
export default function DashboardPage() {

    return <main>
        <section className="hero">
            <div className={style.content}>
                {
                    info.algomachines.map((value) => <>
                        <Algomachine algomachineTitle={value.name} info={value.exhausters}/>
                    </>)
                }
            </div>
        </section>
    </main>
}
