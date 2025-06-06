import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function WelcomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.background}>
      <div style={styles.circles}>
        <div style={styles.circle1}></div>
        <div style={styles.circle2}></div>
      </div>
      <div style={styles.card}>
        <h1 style={styles.title}>
          ¡Bienvenida, <span style={styles.name}>Brizuela</span>!
        </h1>
        <p style={styles.subtitle}>
          Registrando a <span style={styles.brand}>&ldquo;Amigos Peludos&rdquo;</span>
        </p>
        <Button style={styles.button} onClick={() => navigate('/home')}>
          Ir al Panel
        </Button>
      </div>
    </div>
  );
}

const styles = {
  background: {
    minHeight: '100vh',
    width: '100vw',
    background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  circles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  circle1: {
    position: 'absolute',
    top: '-120px',
    left: '-120px',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, #1976d2 60%, transparent 100%)',
    opacity: 0.18,
    borderRadius: '50%',
    animation: 'float1 6s ease-in-out infinite alternate',
  },
  circle2: {
    position: 'absolute',
    bottom: '-100px',
    right: '-100px',
    width: '220px',
    height: '220px',
    background: 'radial-gradient(circle, #d32f2f 60%, transparent 100%)',
    opacity: 0.15,
    borderRadius: '50%',
    animation: 'float2 7s ease-in-out infinite alternate',
  },
  card: {
    position: 'relative',
    zIndex: 1,
    background: 'rgba(255,255,255,0.85)',
    borderRadius: '20px',
    boxShadow: '0 8px 32px rgba(25, 118, 210, 0.10)',
    padding: '2.8rem 2.2rem',
    minWidth: '320px',
    maxWidth: '95vw',
    textAlign: 'center',
    backdropFilter: 'blur(6px)',
    border: '1.5px solid rgba(25, 118, 210, 0.10)',
    animation: 'fadeIn 1.2s',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1.1rem',
    color: '#1976d2',
    fontWeight: 700,
    letterSpacing: '1px',
    lineHeight: 1.1,
  },
  name: {
    color: '#d32f2f',
    background: 'linear-gradient(90deg, #d32f2f 40%, #1976d2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 800,
    letterSpacing: '2px',
    textShadow: '0 2px 8px rgba(211,47,47,0.08)',
  },
  subtitle: {
    fontSize: '1.25rem',
    marginBottom: '2.3rem',
    color: '#333',
    fontWeight: 500,
    letterSpacing: '0.5px',
  },
  brand: {
    color: '#d32f2f',
    fontWeight: 700,
    fontSize: '1.15em',
    letterSpacing: '1px',
    textShadow: '0 1px 4px rgba(211,47,47,0.10)',
  },
  button: {
    padding: '1rem 2.5rem',
    fontSize: '1.15rem',
    borderRadius: '10px',
    fontWeight: 700,
    boxShadow: '0 4px 16px rgba(25, 118, 210, 0.10)',
    background: 'linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)',
    border: 'none',
  },
};

// Animaciones CSS globales (agrega esto en tu archivo index.css o App.css)
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(40px);}
  to { opacity: 1; transform: translateY(0);}
}
@keyframes float1 {
  from { transform: translateY(0);}
  to { transform: translateY(30px);}
}
@keyframes float2 {
  from { transform: translateY(0);}
  to { transform: translateY(-30px);}
}
*/