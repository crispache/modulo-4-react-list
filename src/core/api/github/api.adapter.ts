import { octokit } from "./api.config";

// TODO: Tipar
interface Response {
  data: any;
  headers: any;
}

export class ClientWrapper {
   makeGetRequest(url: string, params?: any): Promise<Response> {
    return octokit.request(`GET ${url}`, params).then((response) => {
        return {
            data: response.data,
            headers: response.headers
        }
    });
  }
}
