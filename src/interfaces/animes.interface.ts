export interface IAnimes {
  animeDescription: IAnimeDescruption;
  facts: Array<string>;
}

interface IAnimeDescruption {
  anime_id: number;
  anime_name: string;
  anime_img: string;
}
