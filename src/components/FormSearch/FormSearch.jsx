const FormSearch = ({busqueda}) => {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder={busqueda}
        aria-label="Search"
      />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default FormSearch;
