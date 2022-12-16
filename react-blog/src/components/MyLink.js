import { Link } from "react-router-dom";
import './MyLink.css'

const MyLink = (props) => {

    return (
        <Link className="mylink" to={props.link}>{props.label}</Link>
    )

}

export default MyLink;