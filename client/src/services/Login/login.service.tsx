import { HttpService } from "services/http/http.service";

type LoginResponse = {
  success: boolean;
  response: any;
};
const http = new HttpService();

export async function sendLoginData(username: string, password: string) {
  const data = { username: username, password: password };
  try {
    const responseApi: LoginResponse | undefined = await http.post(
      "user/login",
      data
    );
    console.log(responseApi); //A SUPP
    return responseApi;
  } catch (e) {}
}
