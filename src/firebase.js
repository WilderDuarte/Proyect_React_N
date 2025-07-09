import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC7QRpPgeLe7fvQDiYymkzXKw73bWLHF_E",
    authDomain: "spabrillalogin.firebaseapp.com",
    projectId: "spabrillalogin",
    storageBucket: "spabrillalogin.firebasestorage.app",
    messagingSenderId: "1054111031799",
    appId: "1:1054111031799:web:7d45d0424662a206fa4ef2"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar auth y provider de Google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
