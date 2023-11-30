import axios from "axios";

interface Response<T> {
  data: T;
}


export class ClientWrapperAPI<T> {
  makeGetRequest(url: string, params?: any): Promise<Response<T>> {
    return axios.get(url, params).then((response) => {
      return {
        data: response.data,
      };
    });
  }
}
