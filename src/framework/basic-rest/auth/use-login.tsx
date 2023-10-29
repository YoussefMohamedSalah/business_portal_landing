import { useUI } from "@contexts/ui.context";
import Cookies from "js-cookie";
import { useMutation } from "react-query";
import { Endpoints } from "src/enums/endpoints";
import http from "@framework/utils/http";

export interface LoginInputType {
  email: string;
  password: string;
  remember_me: boolean;
}
// async function login(input: LoginInputType) {
//   const { data } = await http.post(Endpoints.LOGIN, input);
//   console.log("🚀 ~ file: use-login.tsx:14 ~ login ~ data:", data)
//   return data;
//   // return {
//   //   token: `${input.email}.${input.remember_me}`.split("").reverse().join("")
//   // };
// }
// export const useLoginMutation = () => {
//   const { authorize, closeModal } = useUI();
//   return useMutation((input: LoginInputType) => login(input), {
//     onSuccess: (data) => {
//       Cookies.set("session", data);
//       Cookies.set("company", data.company);
//       Cookies.set("access_token", data.access);
//       authorize();
//       closeModal();
//     },
//     onError: (data) => {
//       console.log(data, "login error response");
//     }
//   });
// };


export const useLoginMutation = () => {
  return useMutation<any, Error, LoginInputType>(async (input) => {
    const { data } = await http.post(Endpoints.LOGIN, input);
    return data;
  });
};