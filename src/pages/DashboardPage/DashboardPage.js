import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import logo from '../../assets/brilla.png';
import './DashboardPage.css';
import { useAuthState } from 'react-firebase-hooks/auth';
            

function DashboardPage() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  // Función para cerrar sesión en Firebase
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      // SweetAlert opcional
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar expand="lg" variant="dark" className="dashboard-navbar">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={logo}
              alt="Brilla Logo"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Personas" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate('/clientes')}>
                  Clientes
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/auxiliares')}>
                  Auxiliares
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => navigate('/servicios')}>Servicios</Nav.Link>
              <Nav.Link onClick={() => navigate('/cronograma')}>Cronograma</Nav.Link>
              <Nav.Link onClick={() => navigate('/opcion1')}>Opción 1</Nav.Link>
              <Nav.Link onClick={() => navigate('/opcion2')}>Opción 2</Nav.Link>
              <Nav.Link
                onClick={handleLogout}
                className="logout-link"
              >
                <FaSignOutAlt /> Cerrar Sesión
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* CONTENIDO PRINCIPAL */}
      <main className="main-content">
        <div>
          <img src={logo} alt="Brilla Logo" className="main-logo" />
          <h1 className="welcome-title">Welcome to Brilla System</h1>
          <p className="welcome-text">
            Manage your clients, services, and more efficiently!
          </p>
          
            {/* Luego puedes mostrar:
            {user?.displayName}
            {user?.email}
            {user?.photoURL} */}
 
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer mt-auto">
        <div className="container">
          <small>© 2025 Brilla. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}

export default DashboardPage;
