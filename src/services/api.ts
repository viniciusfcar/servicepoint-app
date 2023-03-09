import axios from 'axios';
import { DEV_BASE_URL, PROD_BASE_URL } from '../../env';

const api = axios.create({
	baseURL: DEV_BASE_URL,
  // baseURL: PROD_BASE_URL,
});

export default api;