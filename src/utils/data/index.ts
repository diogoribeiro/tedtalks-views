import { format, parse } from 'date-fns';

import { TedTalk, YearAvgViews, YearViewsByReleaseMonth } from '../../types';

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

export function getReleasesByYear(year: string, talks: TedTalk[]) {
  return talks.filter((talk) => {
    return talk.date.includes(year);
  });
}

export function countViews(talks: TedTalk[]) {
  return talks.reduce((total, talk) => total + talk.views, 0);
}

export function countViewsByReleaseMonth(talks: TedTalk[]) {
  return talks.reduce(
    (totalByMonthRelease, talk) => {
      const date = parse(talk.date, 'LLLL yyyy', new Date());
      const month = format(date, 'MMM');

      if (!totalByMonthRelease[month]) {
        totalByMonthRelease[month] = {
          monthIndex: date.getMonth(),
          monthLabel: month,
          views: 0,
          year: date.getFullYear(),
        };
      }

      totalByMonthRelease[month].views += talk.views / 1_000_000;

      return totalByMonthRelease;
    },
    {} as Record<string, YearViewsByReleaseMonth>,
  );
}

export function getTopFiveViews(talks: TedTalk[]) {
  return talks.sort((talkA, talkB) => talkB.views - talkA.views).slice(0, 5);
}

export function getTopFiveLikes(talks: TedTalk[]) {
  return talks.sort((talkA, talkB) => talkB.likes - talkA.likes).slice(0, 5);
}
