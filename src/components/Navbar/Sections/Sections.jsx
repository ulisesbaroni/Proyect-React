import { Link } from "react-router-dom";
const Sections = () => {
    return (
        <>
              <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Productos
              </Link>
            </li>
        </>
    );
}

export default Sections;
