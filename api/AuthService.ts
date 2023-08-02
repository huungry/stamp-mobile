export const login = async (email: string, password: string) => {
    const response = await fetch('http://192.168.0.185:9000/auth/login', {
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

    const data = await response.json();
    return { response, data };
};
