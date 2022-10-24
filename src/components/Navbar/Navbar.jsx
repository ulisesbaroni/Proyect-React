import "./navbar.css";
import Sections from "./Sections/Sections";
import Dropdown from "./Dropdown/Dropdown";
import CartWidget from "../CartWidget/CartWidget";
import FormSearch from "../FormSearch/FormSearch";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          Arte y Campo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Sections />
            <Dropdown />
          </ul>

          <CartWidget />
          <FormSearch busqueda={"Buscar Productos"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;