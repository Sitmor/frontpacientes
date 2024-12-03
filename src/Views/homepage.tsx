import { useNavigate } from "react-router-dom";

export default function Homepage(){
    const navigate = useNavigate();
    return(
        <div>
  {/* Barra de Navegación */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Centro Médico Galenos
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" href="homepageP.html">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./mis_reservas.html">
              Mis Reservas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./TomaHora/TomaHoraCentro.html">
              Reservar Hora
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./mi_perfil.html">
              Mi Perfil
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Encabezado */}
  <header className="bg-light text-center py-5">
    <h1 className="display-4">Bienvenido, Paciente</h1>
    <p className="lead">
      Gestione sus horas médicas de forma rápida y sencilla.
    </p>
  </header>
  {/* Contenido Principal */}
  <div className="container my-5">
    <div className="row">
      {/* Próximas Citas */}
      <div className="col-md-6 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-primary">Próximas Atenciones</h5>
            <p className="card-text">
              Revise la información de sus próximas citas médicas.
            </p>
            <button className="btn btn-primary" onClick={() => {navigate("/myreservations")}}>
              Ver Mis Reservas
            </button>
          </div>
        </div>
      </div>
      {/* Reservar Hora */}
      <div className="col-md-6 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-success">Reservar Nueva Hora</h5>
            <p className="card-text">
              Elija un centro, médico, y fecha para su próxima atención.
            </p>
            <button onClick={() => {navigate("/makereservation")}} className="btn btn-success">
              Reservar Hora
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      {/* Información del Centro */}
      <div className="col-md-6 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-warning">Información del Centro</h5>
            <p className="card-text">
              Conozca la ubicación, horarios y contacto de nuestro centro
              médico.
            </p>
            <button onClick={() => {navigate("/information")}} className="btn btn-warning">
              Ver Información
            </button>
          </div>
        </div>
      </div>
      {/* Ayuda y Soporte */}
      <div className="col-md-6 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-danger">Ayuda y Soporte</h5>
            <p className="card-text">
              ¿Tiene dudas? Contáctenos para obtener asistencia.
            </p>
            <button onClick={() => {navigate("/support")}} className="btn btn-danger">
              Contactar Soporte
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <footer className="bg-primary text-white text-center py-3">
    <p className="mb-0">
      © 2024 Centro Médico Galenos. Todos los derechos reservados.
    </p>
  </footer>
  {/* Scripts */}
</div>

    )
}