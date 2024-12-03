import { useNavigate } from "react-router-dom";

export default function Informacion(){
  const navigate = useNavigate();
  return(
  <div>
    <div className="container mt-5">
      <h1 className="text-center">Información del Centro</h1>
      <p className="text-center">
        Conozca la ubicación, horarios y contacto de nuestro centro médico.
      </p>
      <div className="mt-4">
        <p>
          <strong>Ubicación:</strong> Av. Siempre Viva 123, Ciudad
        </p>
        <p>
          <strong>Horarios:</strong> Lunes a Viernes: 9:00 AM - 8:00 PM, Sábados:
          9:00 AM - 2:00 PM
        </p>
        <p>
          <strong>Contacto:</strong> Teléfono: +123 456 7890 | Correo:
          contacto@centromedico.com
        </p>
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