import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

export default function Login(){  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({rut: "", contrasena:""});

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
            login {
              rut
              contrasena
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
    <div className="container">
      {/* Contenedor del Login */}
      <div className="login-container">
        <div className="login-header">
          <h1>Iniciar Sesión</h1>
          <p className="text-muted">Ingrese sus credenciales para continuar</p>
        </div>
        {/* Formulario */}
        <form id="loginForm" onSubmit={HandleSubmit}>
          {/* Campo de Rut */}
          <label htmlFor="Rut">RUT</label>
          <br />
          <small>Formato: 12.345.678-9</small>
          <input
            type="text"
            className="form-control"
            id="Rut"
            placeholder=""
          />
          {/* Campo de Contraseña */}
          <label htmlFor="Rut">Contraseña</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="Contraseña"
            placeholder=""
          />
          {/* Botón de Iniciar Sesión */}
          <button type="submit" className="btn btn-primary my-3">
            Iniciar Sesión
          </button>
        </form>
        {/* Footer con enlaces */}
        <div className="login-footer">
          <p>
            ¿No tienes cuenta? <button className="btn btn-primary" onClick={() => {navigate("/register")}}>Regístrate</button>
          </p>
        </div>
      </div>
    </div>
  </div>

    )
}