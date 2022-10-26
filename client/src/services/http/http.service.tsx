import axios, { Axios, AxiosError } from "axios";

export class HttpService {
  axiosClient: Axios;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:3001",
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  async get(path: string) {
    try {
      const response = await this.axiosClient.get(path);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async post(path: string, data: any) {
    try {
      const response = await this.axiosClient.post(path, data, {
        withCredentials: true,
      });
      return { success: true, response: response.data };
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return { success: false, response: e.response?.data };
      }
    }
  }
}
