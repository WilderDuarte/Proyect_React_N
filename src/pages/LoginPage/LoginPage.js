import { useState } from 'react'; // permite crear variables que cambian en el tiempo (estado)., guarda valores cambiantes por ejm cotnadores, formularios, etc
import Swal from 'sweetalert2';
import './LoginPage.css';
import logo from '../../assets/brilla.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Simulando la base de datos de usuarios
  const usuarios = [
    { email: "juan@correo.com", password: "Jua123" },
    { email: "maria@correo.com", password: "Mar123" },
    { email: "carlos@correo.com", password: "Car123" },
    { email: "laura@correo.com", password: "Lau123" },
    { email: "andres@correo.com", password: "And123" },
    { email: "camila@correo.com", password: "Cam123" },
    { email: "david@correo.com", password: "Dav123" },
    { email: "paula@correo.com", password: "Pau123" },
    { email: "jose@correo.com", password: "Jos123" },
    { email: "valentina@correo.com", password: "Val123" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire("Campos vacíos", "Por favor llena todos los campos.", "warning");
      return;
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(email)) {
      Swal.fire("Correo inválido", "Por favor escribe un correo válido.", "error");
      return;
    }

    const usuarioValido = usuarios.find(u => u.email === email && u.password === password);

    if (usuarioValido) {
      Swal.fire({
        title: "¡Bienvenido!",
        text: "Inicio de sesión exitoso.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      }).then(() => {
        window.location.href = "/dashboard";
      });
    } else {
      Swal.fire("Error", "Correo o contraseña incorrectos.", "error");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient">
      <div className="form-card">
        <img src={logo} alt="Logo de Brilla" className="logo mb-3 d-block mx-auto" style={{ width: '250px' }} />
        <h3 className="mb-4 text-center">Iniciar Sesión</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="tucorreo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Entrar</button>
          </div>
        </form>
        <div className="text-center mt-3">
          <a href="/register">¿No tienes cuenta? Regístrate</a><br />
          <a href="/forgot">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
