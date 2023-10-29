import { useUI } from "@contexts/ui.context";
import http from "@framework/utils/http";
import Cookies from "js-cookie";
import { useMutation } from "react-query";
import { Endpoints } from "src/enums/endpoints";

export interface SignUpInputType {
  email: string;
  password: string;
  name: string;
  remember_me: boolean;
}

export const useSignUpMutation = () => {
  return useMutation<any, Error, SignUpInputType>(async (input) => {
    const { data } = await http.post(Endpoints.REGISTER, input);
    return data;
  });
};

