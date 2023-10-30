import { useMutation } from "react-query";

export interface InitialDataType {
    otp: string;
    name: string;
    address: string;
    size: string;
}

async function handleInitial(input: InitialDataType) {
    return input;
}
export const useInitialDataMutation = () => {
    return useMutation((input: InitialDataType) => handleInitial(input), {
        onSuccess: (data) => {
            console.log(data, "UpdateUser success response");
        },
        onError: (data) => {
            console.log(data, "UpdateUser error response");
        }
    });
};
