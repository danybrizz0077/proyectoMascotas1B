import { useNavigate } from 'react-router-dom';
import useFetchPets from '../hooks/useFetchPets';
import useDeletePet from '../hooks/useDeletePet';
import Card from '../components/Card';
import Button from '../components/Button';

export default function HomePage() {
  const navigate = useNavigate();
  const { pets, loading, reload } = useFetchPets();
  const { remove } = useDeletePet();

  return (
    <div style={styles.background}>
      <div style={styles.header}>
        <h2 style={styles.title}>🐾 Registro de Mascotas</h2>
        <Button style={styles.addButton} onClick={() => navigate('/mascotas/nueva')}>
          + Nueva Mascota
        </Button>
      </div>

      <div style={styles.list}>
        {loading ? (
          <p style={styles.info}>Cargando mascotas…</p>
        ) : pets.length === 0 ? (
          <p style={styles.info}>No hay mascotas registradas.</p>
        ) : (
          pets.map((p) => (
            <Card key={p.id} style={styles.card}>
              <div style={styles.row}>
                <div style={styles.petInfo}>
                  <div><span style={styles.label}>Nombre:</span> {p.mascota}</div>
                  <div><span style={styles.label}>Especie:</span> {p.especie}</div>
                  <div><span style={styles.label}>Raza:</span> {p.raza}</div>
                  <div><span style={styles.label}>Edad:</span> {p.edad}</div>
                  <div><span style={styles.label}>Dueño:</span> {p.propietario}</div>
                </div>
                <div style={styles.actions}>
                  <Button
                    style={styles.editButton}
                    onClick={() => navigate(`/mascotas/editar/${p.id}`)}
                  >
                    Editar
                  </Button>
                  <Button
                    style={styles.deleteButton}
                    onClick={() => remove(p.id, reload)}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  background: {
    minHeight: '100vh',
    background: 'linear-gradient(120deg, #f8fafc 0%, #a1c4fd 100%)',
    padding: '0',
  },
  header: {
    maxWidth: '800px',
    margin: '2.5rem auto 1.5rem auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem',
  },
  title: {
    fontSize: '2.2rem',
    color: '#1976d2',
    fontWeight: 800,
    letterSpacing: '1px',
    margin: 0,
  },
  addButton: {
    background: 'linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)',
    color: '#fff',
    fontWeight: 700,
    fontSize: '1.1rem',
    borderRadius: '8px',
    padding: '0.7rem 1.5rem',
    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
  },
  list: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 1rem 2rem 1rem',
  },
  info: {
    textAlign: 'center',
    color: '#888',
    fontSize: '1.1rem',
    marginTop: '2rem',
  },
  card: {
    background: 'rgba(255,255,255,0.85)',
    borderRadius: '16px',
    boxShadow: '0 4px 16px rgba(25, 118, 210, 0.08)',
    marginBottom: '1.5rem',
    padding: '1.5rem 1.2rem',
    border: '1px solid #e3eafc',
    backdropFilter: 'blur(4px)',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  petInfo: {
    fontSize: '1.08rem',
    color: '#222',
    lineHeight: 1.7,
    minWidth: '220px',
  },
  label: {
    fontWeight: 700,
    color: '#1976d2',
    marginRight: '0.3em',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.7rem',
    marginTop: '0.5rem',
  },
  editButton: {
    background: 'linear-gradient(90deg, #388e3c 60%, #66bb6a 100%)',
    color: '#fff',
    fontWeight: 700,
    borderRadius: '8px',
    padding: '0.6rem 1.2rem',
  },
  deleteButton: {
    background: 'linear-gradient(90deg, #d32f2f 60%, #ff7961 100%)',
    color: '#fff',
    fontWeight: 700,
    borderRadius: '8px',
    padding: '0.6rem 1.2rem',
  },
};