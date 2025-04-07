export interface httpOptions extends RequestInit {
  body?: any;
}
export interface httpResponseError {
  err: boolean;
  status: number | string;
  statusText: string;
}

export interface listPokemon {
  count: number;
  next: string;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}
