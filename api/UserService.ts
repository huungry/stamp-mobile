import getEnvVars from '../config';
import { UserView } from '../interfaces/User';

const { API_URL } = getEnvVars();

export const findMe = async (token: string) => {
    const response = await fetch(`${API_URL}/accounts/users/me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'accept': 'application/json',
        }
    });

    const data: UserView = await response.json();
    return { response, data };
};

