import { ShowType } from '../../types/enum';

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
