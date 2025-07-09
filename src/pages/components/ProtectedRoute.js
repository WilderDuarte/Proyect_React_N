import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import Spinner from './Spinner';

function ProtectedRoute({ children }) {
  // Hook de Firebase para saber si hay sesión iniciada
  const [user, loading] = useAuthState(auth);

  if (loading) {
    // Muestra un loader mientras verifica autenticación
    return <Spinner />;
  }

  if (!user) {
    // Si NO hay sesión iniciada, redirige al login
    return <Navigate to="/" replace />;
  }

  // Si hay sesión, muestra el componente protegido
  return children;
}

export default ProtectedRoute;
