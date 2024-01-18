import { TOTP_KEY, VRCHAT_PASSWORD, VRCHAT_USERNAME } from '$env/static/private';
import { wrapper } from 'axios-cookiejar-support';
import { OpenAPIClientAxios, type Document } from 'openapi-client-axios';
import { Secret, TOTP } from 'otpauth';
import { CookieJar } from 'tough-cookie';
import type { Client as ClientType } from '../../vrchat/types';
import ClientSpec from './openapi.json';
const totp = new TOTP({
	algorithm: 'SHA1',
	digits: 6,
	period: 30,
	secret: Secret.fromBase32(TOTP_KEY.replace(/ /g, ''))
});

function getTotp(): string {
	return totp.generate();
}

const jar = new CookieJar();

const ClientInitalizer = new OpenAPIClientAxios({definition: ClientSpec as unknown as Document, axiosConfigDefaults: {
	withCredentials: true,
	headers: {
		'User-Agent': 'LunyBot/1.0.0 (https://github.com/imlvna)'
	},
	jar
}});
export const Client = ClientInitalizer.init<ClientType>().then(wrapper).then(async (client) => {
	await client.getCurrentUser(undefined, undefined, {
		headers: {
			Authorization: `Basic ${btoa(`${encodeURIComponent(VRCHAT_USERNAME)}:${encodeURIComponent(VRCHAT_PASSWORD)}`)}`,
		},
	});
	await client.verify2FA(undefined, {code: getTotp()});
	return client;
});