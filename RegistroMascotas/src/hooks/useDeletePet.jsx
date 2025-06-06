import { toast } from 'react-toastify';
import { deletePet } from '../services/petsService';

export default function useDeletePet() {
  const remove = async (id, onDeleted) => {
    if (!window.confirm('¿Seguro que deseas eliminar esta mascota?')) return;
    try {
      await deletePet(id);
      toast.success('Mascota eliminada');
      if (typeof onDeleted === 'function') {
        onDeleted();
      }
    } catch (error) {
      toast.error(error?.message || 'Error al eliminar');
    }
  };

  return { remove };
}