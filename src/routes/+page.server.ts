import { GROUP_ID } from '$lib/constants';
import { getTotp } from '$lib/server/totp';
import { axios, init } from '$lib/server/vrchat';
// import { AuthenticationApi } from '$lib/server/vrchat';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	await init();
	const group = await axios.get(`/groups/${GROUP_ID}`);
	console.log(group.data);
	return {
		props: {
			totp: getTotp()
		}
	};
};
