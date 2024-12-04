import { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

export default function Registro(){

  const [formData, setFormData] = useState({nombre: "",apellido: "",rut: "", email:"", confirmaremail:"", telefono:"", contrasena:"", confirmarcontrasena:"", acepto:""});

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  function HandleSubmit(event: any){
    event.preventDefault();

    const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
    connectToDevTools: true,
    });

    client
      .query({
        query: gql`
          query QUERY {
            getMedicos {
              rut
              nombre
              especialidad
            }
          }
        `,
      })
      .then((result) => console.log(result));
  };

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
            <a className="nav-link" href="#">
              Mis Reservas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./TomaHora/TomaHoraCentro.html">
              Reservar Hora
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./Login.html">
              Mi Perfil
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container my-5">
    <h1 className="text-center mb-4">Registro de Paciente</h1>
    <form onSubmit={HandleSubmit}>
      {/* Nombre y Apellido */}
      <div className="form-row row">
        <div className="col-md-6 mb-3">
          <label htmlFor="Rut">Nombre</label>
          <input
            value={formData.nombre}
            onChange={handleChange}
            type="text"
            className="form-control is-valid"
            id="Nombre"
            placeholder="Nombre"
          />
          <div className="valid-feedback">¡Se ve bien!</div>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="Apellido">Apellido</label>
          <input
            value={formData.apellido}
            onChange={handleChange}
            type="text"
            className="form-control is-valid"
            id="Apellido"
            placeholder="Apellido"
          />
          <div className="valid-feedback">¡Se ve bien!</div>
        </div>
      </div>
      {/* RUT */}
      <div className="form-row row">
        <div className="col-md-4 mb-3">
          <label htmlFor="Rut">RUT</label>
          <br />
          <small>Formato: 12.345.678-9</small>
          <input
            value={formData.rut}
            onChange={handleChange}
            type="text"
            className="form-control is-valid"
            id="Rut"
            placeholder=""
          />
          <div className="valid-feedback">¡Se ve bien!</div>
        </div>
      </div>
      {/* Correo Electrónico */}
      <div className="form-row row">
        <div className="col-md-6 mb-3">
          <label htmlFor="Email">Correo Electrónico</label>
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="form-control is-invalid"
            id="Email"
            placeholder="correo@ejemplo.com"
          />
          <div className="invalid-feedback">
            Por favor, ingrese un correo válido.
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="Email">Confirmar Correo Electrónico</label>
          <input
            value={formData.confirmaremail}
            onChange={handleChange}
            type="email"
            className="form-control is-invalid"
            id="ConfirmEmail"
            placeholder="correo@ejemplo.com"
          />
          <div className="invalid-feedback">
            Por favor, ingrese un correo válido.
          </div>
        </div>
      </div>
      {/* Teléfono */}
      <div className="form-row row">
        <div className="col-md-4 mb-3">
          <label htmlFor="Telefono">Teléfono</label>
          <div className="input-group">
            <span className="input-group-text">+569</span>
            <input
              value={formData.telefono}
              onChange={handleChange}
              type="tel"
              className="form-control is-valid"
              id="Telefono"
              placeholder=""

            />
            <div className="valid-feedback">¡Perfecto!</div>
          </div>
        </div>
      </div>
      {/* Contraseña y Confirmar Contraseña */}
      <div className="form-row row">
        <div className="col-md-6 mb-3">
          <label htmlFor="validationServerPassword">Contraseña</label>
          <input
            value={formData.contrasena}
            onChange={handleChange}
            type="password"
            className="form-control is-invalid"
            id="Contraseña"
            placeholder="Ingrese su contraseña"
          />
          <div className="invalid-feedback">La contraseña es requerida.</div>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="validationServerConfirmPassword">
            Confirmar Contraseña
          </label>
          <input
            value={formData.confirmarcontrasena}
            onChange={handleChange}
            type="password"
            className="form-control is-invalid"
            id="ConfirmContraseña"
            placeholder="Confirme su contraseña"
          />
          <div className="invalid-feedback">
            Las contraseñas deben coincidir.
          </div>
        </div>
      </div>
      {/* Aceptar Términos */}
      <div className="form-group mb-3">
        <div className="form-check">
          <input
            value={formData.acepto}
            onChange={handleChange}
            className="form-check-input is-invalid"
            type="checkbox"
            id="CajaCheck"
          />
          <label className="form-check-label" htmlFor="invalidCheck3">
            Acepto los términos y condiciones
          </label>
          <div className="invalid-feedback">Debe aceptar antes de enviar.</div>
        </div>
      </div>
      {/* Botón Enviar */}
      <button className="btn btn-primary w-100" id="btn-registro" type="submit">
        Registrarse
      </button>
    </form>
  </div>
</div>

    )
}