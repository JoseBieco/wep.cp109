export interface IAnimes {
  animeDescription: IAnimeDescruption;
  facts: Array<string>;
}

interface IAnimeDescruption {
  anime_id: number;
  anime_name: string;
  anime_img: string;
}

export interface IOnePieceCharacter {
  character: IPersonalInfo;
  position: string;
  akuma_no_mi: string;
  bounty: number;
}

interface IPersonalInfo {
  name: string;
  img: string;
  blood_type: string;
  age: number;
}
