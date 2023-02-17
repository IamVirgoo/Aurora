import { Link } from "react-router-dom";

export default function DashboardPage() {

    return <main>
        <section className="hero">
            <div className="hero--container">
                <h1 className="hero--container--title">
                    Dashboard
                </h1>
                <Link to={"/<exgauster>"}>Exgauster link</Link>
            </div>
        </section>
    </main>
}
