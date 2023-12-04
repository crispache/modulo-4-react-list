import { ClientWrapperAPI } from "@/core/api";
import { CharacterDetailsApi } from "./api.model";


class ApiService<T> {
  client: ClientWrapperAPI<T>;

  constructor(client: ClientWrapperAPI<T>) {
    this.client = client;
  }

  async getCharacterDetails(id: number): Promise<T> {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const { data } = await this.client.makeGetRequest(url);
    return data;
  }
}

const client = new ClientWrapperAPI<CharacterDetailsApi>();
const apiService = new ApiService<CharacterDetailsApi>(client);

export { apiService };
