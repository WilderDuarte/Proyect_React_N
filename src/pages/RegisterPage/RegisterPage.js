import { useState } from 'react';
import Swal from 'sweetalert2';
import './RegisterPage.css';
import logo from '../../assets/brilla.png';

function RegisterPage() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    sexo: '',
    telefono: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData[key] === '') {
        Swal.fire("Campos incompletos", "Por favor llena todos los campos.", "warning");
        return;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire("Correo inválido", "Escribe un correo válido.", "error");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Swal.fire("Contraseña", "Las contraseñas no coinciden.", "error");
      return;
    }

    Swal.fire("¡Registro exitoso!", "Usuario registrado correctamente.", "success");
  };

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient">
      <div className="form-card">
        <img
          src={logo}
          alt="Logo Brilla"
          className="logo mb-3 d-block mx-auto"
          style={{ width: '120px' }}
        />
        <h3 className="mb-4 text-center">Registro de Usuario</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombres</label>
            <input
              type="text"
              className="form-control"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
              placeholder="Tus nombres"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Apellidos</label>
            <input
              type="text"
              className="form-control"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              placeholder="Tus apellidos"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Fecha de Nacimiento</label>
            <input
              type="date"
              className="form-control"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Sexo</label>
            <div className="d-flex gap-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sexo"
                  value="Masculino"
                  checked={formData.sexo === 'Masculino'}
                  onChange={handleChange}
                />
                <label className="form-check-label">Masculino</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sexo"
                  value="Femenino"
                  checked={formData.sexo === 'Femenino'}
                  onChange={handleChange}
                />
                <label className="form-check-label">Femenino</label>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              type="tel"
              className="form-control"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ej: 3001234567"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Escribe tu contraseña"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Repetir Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirma tu contraseña"
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">Registrar</button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleBack}
            >
              Volver al inicio de sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
