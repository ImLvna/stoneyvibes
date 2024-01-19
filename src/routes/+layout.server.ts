import { GROUP_ID } from '$lib/constants';
import { init } from '$lib/server/vrchat';
import { cachedRequest } from '$lib/server/vrchat/cache';
// import { AuthenticationApi } from '$lib/server/vrchat';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const client = await init();
	const group = (await cachedRequest(1000, "getGroup", client.getGroup, GROUP_ID)).data;
  
	return {
			group,
	};
};

export const prerender = false;