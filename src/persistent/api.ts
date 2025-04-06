import axios from 'axios';

import { SNIPFY_API_URL } from './config';

const api = axios.create({ baseURL: SNIPFY_API_URL });

export { api };
