export type DataType = {
  name: {
    common: string;
  };
  nativeName: {
    [key: string]: {
      official: string;
    };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[] | null;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[];
  flags: {
    png: string;
  };
};
