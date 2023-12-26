import { useQuery } from 'react-query';

import { loadCatalog } from '../utils/api/catalog';
import { Show } from '../types';

interface UseCatalog {
  catalog: Show[];
  isLoading: boolean;
  isError: boolean;
}

function useCatalog(): UseCatalog {
  const { isLoading, isError, data } = useQuery('catalog', async () => {
    const catalogResponse = await loadCatalog();
    const data = await catalogResponse.json();

    return data;
  });

  return { catalog: data, isError, isLoading };
}

export default useCatalog;
