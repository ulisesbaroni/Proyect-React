import { Link } from "react-router-dom";

const Dropdown = () => {
    return (
        
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to='/category/porta-sahumerios'>Porta sahumerios</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to='/category/veladores'>Veladores</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to='/category/varios'>Varios</Link>
                </li>
              </ul>
            </li>
        
    );
}

export default Dropdown;
