import { GROUP_ID } from '$lib/constants';
import { axios, init } from '$lib/server/vrchat';
// import { AuthenticationApi } from '$lib/server/vrchat';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	await init();
	const group = await axios.get(`/groups/${GROUP_ID}`);
	const instances = await axios.get(`/groups/${GROUP_ID}/instances`);
	return {
		props: {
			group: group.data,
			instances: instances.data
		}
	};
};
