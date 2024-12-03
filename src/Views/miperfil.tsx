export default function miperfil(){
    return(
        <div>
  <div className="container mt-5">
    <h1 className="text-center">Mi Perfil</h1>
    <div className="mt-4">
      <p>
        <strong>Usuario:</strong> <span id="username" />
      </p>
      <p>
        <strong>Email:</strong> usuario@centromedico.com
      </p>
      <p>
        <strong>Teléfono:</strong> +123 456 7890
      </p>
    </div>
    <div className="text-center mt-5">
      <button className="btn btn-danger">
        Cerrar Sesión
      </button>
    </div>
  </div>
</div>

    )
}