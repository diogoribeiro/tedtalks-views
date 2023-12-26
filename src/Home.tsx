import useCatalog from './hooks/useCatalog';

import Page from './components/Page/Page';

function Home() {
  const { isLoading, catalog = [] } = useCatalog();

  return <Page isLoading={isLoading}>{catalog[0]?.description}</Page>;
}

export default Home;
