import { GROUP_ID } from '$lib/constants';
import { Client, init } from '$lib/server/vrchat';
// import { AuthenticationApi } from '$lib/server/vrchat';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	await init();
	const client = await Client;
	const group = (await client.getGroup(GROUP_ID)).data;
  
	return {
			group,
	};
};

export const prerender = false;