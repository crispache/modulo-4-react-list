import { ClientWrapper } from "@/core/api";
import { MemberDetailEntityApi } from "./api.model";

interface Params {
  username: string,
  headers: {
    "X-GitHub-Api-Version": string;
  };
}

interface Response {
  data: MemberDetailEntityApi;
}

class ApiService {
  client: ClientWrapper;

  constructor(client: ClientWrapper) {
    this.client = client;
  }

  async getMemberDetails(params: Params): Promise<Response> {
    const url = "/users/{username}";
    const { data } = await this.client.makeGetRequest(url, params);
    return {
      data,
    };
  }
}

const client = new ClientWrapper();
const apiService = new ApiService(client);

export { apiService };
