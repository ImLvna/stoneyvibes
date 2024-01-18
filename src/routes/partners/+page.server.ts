import { PARTNER_GROUPS } from '$lib/constants';
import { Client } from '$lib/server/vrchat';
import type { OwnedGroup } from '$lib/vrchat/group';
// import { AuthenticationApi } from '$lib/server/vrchat';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const client = await Client;
	const partnerGroups = (await Promise.all(PARTNER_GROUPS.map(async (id) => {
		const group = (await client.getGroup(id)).data;
		return {
			...group,
			owner: (await client.getUser(group.ownerId!)).data
		} as OwnedGroup
	})));
	return {
			partnerGroups,
	};
};
