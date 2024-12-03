import { useNavigate } from "react-router-dom";

export default function Soporte(){
  const navigate = useNavigate();
  return(
        <div>
  <div className="container mt-5">
    <h1 className="text-center">Contactar Soporte</h1>
    <p className="text-center">
      ¿Tiene dudas? Contáctenos para obtener asistencia.
    </p>
    <div className="mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            placeholder="Escriba su nombre"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="correo"
            className="form-control"
            placeholder="correo@ejemplo.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            className="form-control"
            rows={4}
            placeholder="Escriba su mensaje"
            defaultValue={""}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Enviar Mensaje
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