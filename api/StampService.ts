import getEnvVars from '../config';
import { StampsViewResponse } from '../interfaces/Stamp';

const { API_URL } = getEnvVars();

export const listStamps = async (token: string) => {
    const response = await fetch(`${API_URL}/restaurants/stamps`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'accept': 'application/json',
        }
    });

    const data: StampsViewResponse = await response.json();
    return { response, data };
};

