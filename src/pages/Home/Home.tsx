import { generatePath, useNavigate } from 'react-router-dom';

import useTalksList from '../../hooks/useTalksList';

import Page from '../../components/Page/Page';
import RatesGraph from './RatesGraph/RatesGraph';
import { getAvgViewsPerYear } from '../../utils/data';
import { yearReviewRoute } from '../../utils/routes';

function Home() {
  const { isLoading, tedTalks } = useTalksList();
  const navigate = useNavigate();

  const data = isLoading ? [] : getAvgViewsPerYear(tedTalks);
  const onClickYear = (year: string) => {
    navigate(generatePath(yearReviewRoute, { year }));
  };

  return (
    <Page isLoading={isLoading}>
      <RatesGraph yearsAvgViews={data} onClickYear={onClickYear} />
    </Page>
  );
}

export default Home;
