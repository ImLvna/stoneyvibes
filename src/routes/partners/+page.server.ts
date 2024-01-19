import { PARTNER_GROUPS } from '$lib/constants';
import { init } from '$lib/server/vrchat';
import { cachedRequest } from '$lib/server/vrchat/cache';
import type { OwnedGroup } from '$lib/vrchat/group';
// import { AuthenticationApi } from '$lib/server/vrchat';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {
	const client = await init();
		const partnerGroups = (await Promise.all(
			PARTNER_GROUPS.map(
				async (id) => {
					const group = (await cachedRequest(1000 * 60 * 30, "getGroup", client.getGroup, id)).data;
					return {
						...group,
						owner: (await cachedRequest(1000 * 60 * 30, "getUser", client.getUser, group.ownerId!)).data
					} as OwnedGroup
				}
			)
		));
	return {
		partnerGroups,
	};
};

export const prerender = false;