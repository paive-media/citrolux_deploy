import axios from 'axios';
import apiConfig from '../api-config';
import https from 'https';

const GRAPHQL_URL = apiConfig.graphql_url;


const agent = new https.Agent({
    rejectUnauthorized: false, // Необязательно, если вы используете самоподписанные сертификаты
    secureProtocol: 'TLSv1_method' // Установите ту версию протокола SSL, которая поддерживается сервером
});

const graphqlApi = axios.create({
    baseURL: GRAPHQL_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'POST',
    httpsAgent: agent
});

export default graphqlApi;
