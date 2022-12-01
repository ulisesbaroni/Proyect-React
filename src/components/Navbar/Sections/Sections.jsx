import { Link } from "react-router-dom";
const Sections = () => {
    return (
        <>
              <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
        </>
    );
}

export default Sections;
