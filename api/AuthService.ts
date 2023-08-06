import getEnvVars from '../config';
import { LoginResponse } from '../interfaces/Login';

const { API_URL } = getEnvVars();

export const login = async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data: LoginResponse = await response.json();
    return { response, data };
};
