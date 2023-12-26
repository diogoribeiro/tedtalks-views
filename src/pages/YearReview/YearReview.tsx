import { Link, useParams } from 'react-router-dom';

import useTalksList from '../../hooks/useTalksList';
import Page from '../../components/Page/Page';
import { countViews, getReleasesByYear, getTopFiveLikes, getTopFiveViews } from '../../utils/data';
import { rootRoute } from '../../utils/routes';

import './YearReview.css';

function YearReview() {
  const { isLoading, tedTalks } = useTalksList();
  const { year } = useParams();

  const yearReleases = getReleasesByYear(year!, tedTalks);
  const totalViews = countViews(yearReleases);
  const topViews = getTopFiveViews(yearReleases);
  const topLikes = getTopFiveLikes(yearReleases);

  return (
    <Page isLoading={isLoading}>
      <div className="year-review-header-container">
        <h3 className="year-review-title">{year} overview</h3>
        <Link className="close-button" to={rootRoute}>
          X
        </Link>
      </div>
      <div className="container">
        <section className="box">
          <header>
            <h3>Total views</h3>
          </header>
          <span className="highlight number">{Intl.NumberFormat().format(totalViews)}</span>
        </section>

        <section className="box list">
          <header>
            <h3>Top 5 viewed</h3>
          </header>
          <ul>
            {topViews.map((talk) => (
              <li key={`views-${talk.link}`}>
                {talk.title} ({talk.author}) -{' '}
                <span className="highlight">{Intl.NumberFormat().format(talk.views)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="box list">
          <header>
            <h3>Top 5 liked</h3>
          </header>
          <ul>
            {topLikes.map((talk) => (
              <li key={`likes-${talk.link}`}>
                {talk.title} ({talk.author}) -{' '}
                <span className="highlight">{Intl.NumberFormat().format(talk.likes)}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Page>
  );
}

export default YearReview;
