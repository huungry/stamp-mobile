import { ErrorResponse } from "./Error";

interface CreateRestaurantSuccessResponse {
    email: string;
    name: string;
}

export type CreateRestaurantResponse = CreateRestaurantSuccessResponse | ErrorResponse;