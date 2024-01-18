import Axios from 'axios';
import { CookieJar } from 'tough-cookie';
import { VRCHAT_USERNAME, VRCHAT_PASSWORD } from '$env/static/private';
import { getTotp } from './totp';

const jar = new CookieJar();

export const axios = Axios.create({
	withCredentials: true,
	baseURL: 'https://api.vrchat.cloud/api/1',
	timeout: 5000,
	headers: {
		'User-Agent': 'Lunybot/1.0.0 (https://github.com/imlvna)'
	}
});

axios.interceptors.response.use((res) => {
	if (res.headers['set-cookie']) {
		jar.setCookieSync(res.headers['set-cookie'][0], 'https://api.vrchat.cloud');
	}
	return res;
});
axios.interceptors.request.use((req) => {
	req.headers = req.headers || {};
	req.headers['Cookie'] = jar.getCookieStringSync('https://api.vrchat.cloud');
	return req;
});

let initialized = false;
export async function init(): Promise<void> {
	if (initialized) return;
	await axios.get('/auth/user', {
		auth: { username: VRCHAT_USERNAME, password: VRCHAT_PASSWORD }
	});
	console.log(jar.getCookiesSync('https://api.vrchat.cloud'));
	await axios('/auth/twofactorauth/totp/verify', {
		method: 'POST',
		data: {
			code: getTotp()
		},
		withCredentials: true
	});
	initialized = true;
}
