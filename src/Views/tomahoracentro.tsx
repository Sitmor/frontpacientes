export default function tomahoracentro(){
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
            <a className="nav-link active" href="../homepageP.html">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Mis Reservas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./TomaHoraCentro.html">
              Reservar Hora
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../Login.html">
              Mi Perfil
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Encabezado */}
  <header className="bg-light text-center py-4">
    <h1 className="display-6">Reservar una Hora</h1>
    <p className="lead">Sigue los pasos para reservar tu hora médica</p>
  </header>
  <div className="container my-5">
    {/* Títulos de los Pasos */}
    <div className="mb-4 text-center">
      <span className="step-title step-current">
        Elegir Centro Médico y Especialidad
      </span>{" "}
      |<span className="step-title step-future">Médico</span> |
      <span className="step-title step-future">Fecha y Hora</span>
    </div>
    {/* Formulario */}
    <form id="formPaso1">
      {/* Selección de Centro Médico */}
      <div className="mb-4">
        <label htmlFor="centroMedico" className="form-label">
          Seleccione el Centro Médico
        </label>
        <select className="form-select" id="centroMedico">
          <option value="">
            Elija un centro
          </option>
          {/* Los valores serán cargados dinámicamente desde el backend */}
        </select>
      </div>
      {/* Selección de Especialidad */}
      <div className="mb-4">
        <label htmlFor="especialidad" className="form-label">
          Seleccione la Especialidad
        </label>
        <select
          className="form-select"
          id="especialidad"
        >
          <option value="">
            Elija una especialidad
          </option>
          {/* Los valores serán cargados dinámicamente desde el backend */}
        </select>
      </div>
      {/* Botón para Continuar */}
      <div className="d-grid">
        <button
          type="button"
          className="btn btn-primary"
          id="btnContinuar"
        >
          Continuar
        </button>
      </div>
    </form>
  </div>
</div>

    )
}