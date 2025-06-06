import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage.jsx';
import HomePage from './pages/HomePage.jsx';
import PetFormPage from './pages/PetFormPage.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar
        pauseOnHover={false}
      />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/mascotas/nueva" element={<PetFormPage />} />
        <Route path="/mascotas/editar/:id" element={<PetFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
