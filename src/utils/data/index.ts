import { parse } from 'date-fns';

import { TedTalk, YearAvgViews } from '../../types';

export function getAvgViewsPerYear(talks: TedTalk[]) {
  const yearViews = talks.reduce(
    (yearViewCount, talk) => {
      const date = parse(talk.date, 'LLLL yyyy', new Date());

      if (date.getFullYear() < 2014) {
        return yearViewCount;
      }

      if (!yearViewCount[date.getFullYear()]) {
        yearViewCount[date.getFullYear()] = [];
      }

      yearViewCount[date.getFullYear()].push(talk.views / 1_000_000);

      return yearViewCount;
    },
    {} as Record<number, number[]>,
  );

  return Object.keys(yearViews).reduce((avgViewsPerYear, releaseYear) => {
    const sumViews = yearViews[parseInt(releaseYear)].reduce((sum, views) => sum + views, 0);
    const avgViews = sumViews / yearViews[parseInt(releaseYear)].length;
    avgViewsPerYear.push({
      year: releaseYear,
      avgViews: avgViews,
    });

    return avgViewsPerYear;
  }, [] as YearAvgViews[]);
}
