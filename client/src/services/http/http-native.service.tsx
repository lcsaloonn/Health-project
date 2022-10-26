enum RequestMethod {
  GET = "GET",
  POST = "POST",
}
type RequestionOptions = {
  method: RequestMethod;
  headers: {
    "Content-Type": string;
    Authorization: string;
    "My-Custom-Header": string;
  };
  body?: string;
};

export class HttpService {
  API = "http://localhost:3001/";

  async get(path: string, data?: any): Promise<any> {
    const requestOptions = {
      method: RequestMethod.GET,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
      },
    };
    return await this.http(requestOptions, path + `/${data}`);
    //this.setState({ postId: data.id });
    // quand le partie state
  }

  async post(path: string, data: any): Promise<any> {
    const requestOptions = {
      method: RequestMethod.POST,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
      },
      body: JSON.stringify(data),
    };
    return this.http(requestOptions, path);
  }

  private async http(
    requestOptions: RequestionOptions,
    path: string
  ): Promise<any> {
    const response = await fetch(this.API + path, requestOptions);

    const responseData = await response.json().catch((error) => {
      console.log("Error ", error);
    });
    if (!response.ok) {
      const error = (responseData && responseData.message) || response.status;
      return Promise.reject(error);
    }
    console.log(responseData); // for test purposes
    return responseData;
  }
}
