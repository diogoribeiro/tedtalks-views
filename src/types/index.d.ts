export interface TedTalk {
  title: string;
  author: string;
  date: string;
  views: number;
  likes: number;
  link: string;
}

export interface YearAvgViews {
  year: string;
  avgViews: number;
}

export interface YearViewsByReleaseMonth {
  monthLabel: string;
  monthIndex: number;
  year: number;
  views: number;
}
