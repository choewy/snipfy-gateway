import axios from 'axios';

import { LINK_FORCE_API_URL } from './config';

const api = axios.create({ baseURL: LINK_FORCE_API_URL });

export { api };
