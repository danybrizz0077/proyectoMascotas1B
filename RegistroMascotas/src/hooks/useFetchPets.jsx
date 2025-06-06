import { useState, useEffect, useCallback } from 'react';
import { getAllPets } from '../services/petsService';
import { toast } from 'react-toastify';

export default function useFetchPets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllPets();
      setPets(data);
    } catch (error) {
      toast.error(error?.message || 'Error cargando mascotas');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const data = await getAllPets();
        if (isMounted) setPets(data);
      } catch (error) {
        if (isMounted) toast.error(error?.message || 'Error cargando mascotas');
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();
    return () => { isMounted = false; };
  }, [fetchData]);

  return { pets, loading, reload: fetchData };
}