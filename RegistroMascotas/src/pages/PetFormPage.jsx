import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useSavePet from '../hooks/useSavePet';
import Button from '../components/Button';

export default function PetFormPage() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { petData, loading, save } = useSavePet(id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: petData });

  useEffect(() => {
    reset(petData);
  }, [petData, reset]);

  const onSubmit = (values) => {
    if (!loading) save(values, navigate);
  };

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h2 style={styles.title}>{id ? 'Editar Mascota' : 'Registrar Nueva Mascota'}</h2>
        {loading ? (
          <p style={styles.info}>Cargando datos…</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
            <div style={styles.field}>
              <label style={styles.label}>Nombre:</label>
              <input
                {...register('mascota', { required: 'Este campo es obligatorio' })}
                type="text"
                disabled={loading}
                style={styles.input}
                autoFocus
              />
              {errors.mascota && <p style={styles.error}>{errors.mascota.message}</p>}
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Especie:</label>
              <input
                {...register('especie', { required: 'Este campo es obligatorio' })}
                type="text"
                disabled={loading}
                style={styles.input}
              />
              {errors.especie && <p style={styles.error}>{errors.especie.message}</p>}
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Raza:</label>
              <input
                {...register('raza')}
                type="text"
                disabled={loading}
                style={styles.input}
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Edad (en años):</label>
              <input
                {...register('edad', {
                  required: 'Debe indicar la edad',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Solo números',
                  },
                })}
                type="text"
                disabled={loading}
                style={styles.input}
              />
              {errors.edad && <p style={styles.error}>{errors.edad.message}</p>}
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Nombre del Dueño:</label>
              <input
                {...register('propietario', { required: 'Este campo es obligatorio' })}
                type="text"
                disabled={loading}
                style={styles.input}
              />
              {errors.propietario && (
                <p style={styles.error}>{errors.propietario.message}</p>
              )}
            </div>

            <div style={styles.buttons}>
              <Button type="submit" disabled={loading} style={styles.saveButton}>
                {id ? 'Actualizar' : 'Crear'}
              </Button>
              <Button
                type="button"
                style={styles.cancelButton}
                onClick={() => navigate('/home')}
                disabled={loading}
              >
                Cancelar
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  background: {
    minHeight: '100vh',
    width: '100vw',
    background: 'linear-gradient(120deg, #f8fafc 0%, #a1c4fd 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  card: {
    background: 'rgba(255,255,255,0.92)',
    borderRadius: '18px',
    boxShadow: '0 8px 32px rgba(25, 118, 210, 0.10)',
    padding: '2.5rem 2rem',
    minWidth: '320px',
    maxWidth: '95vw',
    width: '100%',
    textAlign: 'center',
    backdropFilter: 'blur(6px)',
    border: '1.5px solid rgba(25, 118, 210, 0.10)',
    animation: 'fadeIn 1.2s',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#1976d2',
    fontWeight: 700,
    letterSpacing: '1px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.1rem',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    fontWeight: 600,
    color: '#1976d2',
    marginBottom: '0.3rem',
    fontSize: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.7rem 1rem',
    borderRadius: '8px',
    border: '1px solid #b6c7e3',
    fontSize: '1rem',
    outline: 'none',
    background: '#f8fafc',
    transition: 'border 0.2s',
    marginBottom: '0.2rem',
  },
  error: {
    color: '#d32f2f',
    fontSize: '0.92rem',
    marginTop: '0.2rem',
    marginBottom: 0,
    alignSelf: 'flex-start',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1.2rem',
  },
  saveButton: {
    background: 'linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)',
    color: '#fff',
    fontWeight: 700,
    fontSize: '1.1rem',
    borderRadius: '8px',
    padding: '0.7rem 2rem',
    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
  },
  cancelButton: {
    background: 'linear-gradient(90deg, #757575 60%, #bdbdbd 100%)',
    color: '#fff',
    fontWeight: 700,
    fontSize: '1.1rem',
    borderRadius: '8px',
    padding: '0.7rem 2rem',
    boxShadow: '0 2px 8px rgba(117, 117, 117, 0.10)',
  },
  info: {
    color: '#888',
    fontSize: '1.1rem',
    margin: '2rem 0',
  },
};

// Agrega la animación fadeIn en tu CSS global:
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(40px);}
  to { opacity: 1; transform: translateY(0);}
}
*/