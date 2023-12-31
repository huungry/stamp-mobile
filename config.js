const ENV = {
    dev: {
        // API_URL: 'http://192.168.0.220:9000',
        API_URL: 'http://192.168.0.185:9000',
    },
    prod: {
        API_URL: 'https://production-url.com',
    },
};

const getEnvVars = (env = 'dev') => {
    return ENV[env];
};

export default getEnvVars;
