import { ClientWrapperAPI } from "@/core/api";
import { CharacterApi } from "./api.model";

interface Params {
  page: number;
}

interface Response {
  data: CharacterApi[];
  count: number;
}

interface ResponseApi {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: number | null
  }, 
  results: Array<CharacterApi>
}


class ApiService<T> {
  client: ClientWrapperAPI<T>;

  constructor(client: ClientWrapperAPI<T>) {
    this.client = client;
  }

   async getCharacters(params: Params): Promise<T> {
    const url = "https://rickandmortyapi.com/api/character/";
    const { data } = await this.client.makeGetRequest(url, params);
    return {
      ...data,
    };
  }
}

const client = new ClientWrapperAPI<ResponseApi>();
const apiService = new ApiService<ResponseApi>(client);

export { apiService };
