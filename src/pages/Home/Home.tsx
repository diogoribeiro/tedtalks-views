import useTalksList from '../../hooks/useTalksList';

import Page from '../../components/Page/Page';
import RatesGraph from './RatesGraph/RatesGraph';
import { getAvgViewsPerYear } from '../../utils/data';

function Home() {
  const { isLoading, tedTalks = [] } = useTalksList();

  const data = isLoading ? [] : getAvgViewsPerYear(tedTalks);

  return (
    <Page isLoading={isLoading}>
      <RatesGraph yearsAvgViews={data} onClickYear={console.log} />
    </Page>
  );
}

export default Home;
