import { ErrorResponse } from "./Error";

export interface StampsView {
    restaurantId: string;
    restaurantName: string;
    count: number;
}

export interface StampsViewSuccessResponse {
    stamps: StampsView[];
}

export type StampsViewResponse = StampsViewSuccessResponse | ErrorResponse;