export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface AllCharacter<T> {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: number;
  };
  results: [T];
}
export interface IPagination {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

// export interface PaginationInfo<IPagination> {
//   info: IPagination
// }
// export interface IArticle {
//   id: number;
//   featured: boolean;
//   title: string;
//   url: string;
//   imageUrl: string;
//   newsSite: string;
//   summary: string;
//   publishedAt: string;
//   launches: [
//     {
//       id: string;
//       provider: string;
//     }
//   ];
//   events: [
//     {
//       id: string;
//       provider: string;
//     }
//   ];
// }

// export interface NumberOfArticlesServerResponse {
//   data: number;
// }

// export interface ArticlesServerResponse<T> {
//   data: T[];
// }
