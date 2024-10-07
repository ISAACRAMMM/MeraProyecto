import { Link } from "react-router-dom";
import '../../App.css';

export function Menu() {
  return (
    <div >
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        {/* Botón para colapsar el menú en pantallas pequeñas */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenedor del menú que colapsa */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-column p-3 bg-body-tertiary" >
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                <span className="fs-4">Menú</span>
              </Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Categorías
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Subcategorías
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/productos" className="nav-link">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/uploadImg" className="nav-link">
                Subir Imagen
              </Link>
            </li>
          </ul>
          <hr />
          
        </div>
      </div>
    </nav>
    </div>
  );
}
