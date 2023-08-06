import { ErrorResponse } from "./Error";

interface LoginSuccessResponse {
    token: string;
}

export type LoginResponse = LoginSuccessResponse | ErrorResponse;