

const Dropdown = () => {
    return (
        
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Nosotros
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                  <a className="dropdown-item" href="#">
                    Nuestra Historia
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Contactos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Redes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ubicación
                  </a>
                </li>
              </ul>
            </li>
        
    );
}

export default Dropdown;
