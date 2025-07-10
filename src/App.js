import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import NotFoundPage from  './pages/components/NotFoundPage';

// Rutas para hooks
import UseStatePlay from './pages/Playground/UseStatePlay';
import UseEffectPlay from './pages/Playground/UseEffectPlay';
import UseRefPlay from './pages/Playground/UseRefPlay';

// Protege rutas con autenticación Firebase
import ProtectedRoute from './pages/components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />

        {/* Ruta protegida con Firebase Auth */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Ruta genérica para páginas no encontradas */}
        <Route path="*" element={<NotFoundPage />} />

        {/* Rutas para prácticas de hooks */}
        <Route path="/usestate" element={<UseStatePlay />} />
        <Route path="/useeffect" element={<UseEffectPlay />} />
        <Route path="/useref" element={<UseRefPlay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
