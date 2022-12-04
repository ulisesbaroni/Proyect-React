import { Link } from "react-router-dom";
import "./navbar.css";
import Sections from "./Sections/Sections";
import Dropdown from "./Dropdown/Dropdown";
import CartWidget from "../CartWidget/CartWidget";
import FormSearch from "../FormSearch/FormSearch";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/"><img className="logo" src="https://firebasestorage.googleapis.com/v0/b/react-js-33f86.appspot.com/o/logo-2.png?alt=media&token=f2d86e69-59d9-488b-92d7-4c873497bed5" alt="Imagen del logo" />Arte y Campo</Link>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"></li>

            {<Sections />}
            <Dropdown />

          </ul>
          <FormSearch busqueda={"(En construcción)"} />
          
        </div>
          <CartWidget/>
      </div>
    </nav>
  );
};

export default Navbar;
