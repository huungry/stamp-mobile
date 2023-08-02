export const createRestaurant = async (token: string, email: string, name: string) => {
    const response = await fetch('http://192.168.0.185:9000/restaurants', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'accept': 'application/json',
        },
        body: JSON.stringify({
            email,
            name
        }),
    });

    const data = await response.json();
    return { response, data };
};

export const getRestaurants = async (token: string) => {
    const response = await fetch('http://192.168.0.185:9000/restaurants', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'accept': 'application/json',
        }
    });

    const data = await response.json();
    return { response, data };
};

