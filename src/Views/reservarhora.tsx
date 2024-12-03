import { useNavigate } from "react-router-dom";

export default function Reservarhora(){
  const navigate = useNavigate();
  return(
        <div>
  <div className="container mt-5">
    <h1 className="text-center">Reservar Hora</h1>
    <p className="text-center">
      Elija un centro, médico y fecha para su próxima atención médica.
    </p>
    <div className="mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="centro" className="form-label">
            Centro Médico
          </label>
          <select id="centro" className="form-select">
            <option value={1}>Centro Médico Principal</option>
            <option value={2}>Centro Médico Secundario</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="medico" className="form-label">
            Médico
          </label>
          <select id="medico" className="form-select">
            <option value={1}>Dr. Pérez</option>
            <option value={2}>Dr. López</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">
            Fecha
          </label>
          <input type="date" id="fecha" className="form-control" />
        </div>
        <button type="submit" className="btn btn-success">
          Reservar
        </button>
      </form>
    </div>
    <div className="text-center mt-5">
      <button onClick={() => {navigate("/homepage")}} className="btn btn-primary">
        Volver al Inicio
      </button>
    </div>
  </div>
</div>

    )
}