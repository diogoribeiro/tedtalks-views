import { generatePath, useNavigate } from 'react-router-dom';

import useTalksList from '../../hooks/useTalksList';

import Page from '../../components/Page/Page';
import RatesGraph from './RatesGraph/RatesGraph';
import { getAvgViewsPerYear } from '../../utils/data';
import { yearReviewRoute } from '../../utils/routes';

import './Home.css';

function Home() {
  const { isLoading, tedTalks } = useTalksList();
  const navigate = useNavigate();

  const data = isLoading ? [] : getAvgViewsPerYear(tedTalks);
  const onClickYear = (year: string) => {
    navigate(generatePath(yearReviewRoute, { year }));
  };

  return (
    <Page isLoading={isLoading}>
      <div className="copy-container">
        <span className="copy">
          This chart illustrates the number of average views a Ted Talk had, providing valuable insights to help us
          analyze whether the traffic is on a declining trend. Gain a deeper understanding of TedTalk’s performance and
          its evolving presence in the digital landscape.
        </span>
      </div>
      <div className="content-container">
        <RatesGraph yearsAvgViews={data} onClickYear={onClickYear} />
      </div>
      <div className="copy-container">
        <span className="notes">You may click on the year bar to get more details about its views.</span>
      </div>
    </Page>
  );
}

export default Home;
