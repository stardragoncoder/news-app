import { Article } from './article';

export interface News {
  status: string;
  totalResults: number;
  articles: Article[];
}
