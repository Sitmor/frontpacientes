import { useNavigate } from "react-router-dom";

export default function Misreservas(){
    const navigate = useNavigate();
    return(
<div>
  <div className="container mt-5">
    <h1 className="text-center">Mis Reservas</h1>
    <p className="text-center">
      Aquí puedes revisar la información de tus próximas citas médicas.
    </p>
    <div className="mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Médico</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-12-10</td>
            <td>10:00 AM</td>
            <td>Dr. Pérez</td>
            <td>Cardiología</td>
          </tr>
          <tr>
            <td>2024-12-15</td>
            <td>02:00 PM</td>
            <td>Dr. López</td>
            <td>Dermatología</td>
          </tr>
        </tbody>
      </table>
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