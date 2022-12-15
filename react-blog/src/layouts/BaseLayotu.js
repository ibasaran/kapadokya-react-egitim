import { Outlet, Link } from "react-router-dom"

const BaseLayout = () => {

    return (
        <div>
            
            <div>
                <ul>
                    <li><Link to="/">Blog Listesi</Link></li>
                    <li><Link to="/blogekle">Blog Ekle</Link></li>
                    <li><Link to="/blogistatistik">Blog İstatistik</Link></li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}


export default BaseLayout;