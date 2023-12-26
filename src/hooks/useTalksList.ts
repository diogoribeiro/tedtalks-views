import { useQuery } from 'react-query';

import { loadTedTalks } from '../utils/api/tedTalks';
import { TedTalk } from '../types';

interface UseCatalog {
  tedTalks: TedTalk[];
  isLoading: boolean;
  isError: boolean;
}

function useTalksList(): UseCatalog {
  const { isLoading, isError, data } = useQuery('tedTalks', async () => {
    const tedTalksResponse = await loadTedTalks();
    const data = await tedTalksResponse.json();

    return data;
  });

  return { tedTalks: data, isError, isLoading };
}

export default useTalksList;
