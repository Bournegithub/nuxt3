import httpRequest from './http';
import api from './api';


export const login = (data: any) => {
	return httpRequest.post(api.global.login, data);
}