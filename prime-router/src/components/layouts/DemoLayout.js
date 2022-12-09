import { Link, Outlet } from "react-router-dom"

const DemoLayout = () => {
    return (
        <div>
            <div>
                <Link to="/"> Anasayfa </Link>
                <Link to="/hakkimizda">Hakkımızda</Link>
                <Link to="/iletisim">İletişim</Link>
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <h2>Burasıda Footer</h2>
            </div>
        </div>
    )
}

export default DemoLayout