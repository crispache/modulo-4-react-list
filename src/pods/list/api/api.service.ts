import { ClientWrapper } from "@/core/api";
import { MemberEntityApi } from "./api.model";

interface Params {
  org: string;
  page: number;
  per_page: number;
  headers: {
    "X-GitHub-Api-Version": string;
  };
}

interface Response {
  data: MemberEntityApi[];
  headers: any;
}

class ApiService {
  client: ClientWrapper;

  constructor(client: ClientWrapper) {
    this.client = client;
  }

  async getOrganizationMembers(params: Params): Promise<Response> {
    const url = "/orgs/{org}/members";
    const { data, headers } = await this.client.makeGetRequest(url, params);
    return {
      data,
      headers,
    };
  }
}

const client = new ClientWrapper();
const apiService = new ApiService(client);

export { apiService };
