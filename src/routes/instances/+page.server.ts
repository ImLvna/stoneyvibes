import { GROUP_ID, PARTNER_GROUPS } from '$lib/constants';
import { Client } from '$lib/server/vrchat';
import type { ModeratedInstance } from '$lib/vrchat/instance';
// import { AuthenticationApi } from '$lib/server/vrchat';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const client = await Client;
	const modsOnline = (await client.getFriends({offline: false})).data;
	const instances = (await client.getGroupInstances(GROUP_ID)).data.map((instance) => {
		const mods = modsOnline.filter(({ location }) => location === instance.location);
		return {
			...instance,
			moderatorsOnline: mods.length,
			isModerated: true
		} as ModeratedInstance;
	});
	const partnerGroups = (await Promise.all(PARTNER_GROUPS.map((id) => client.getGroup(id)))).map((res) => res.data);
	const partnerInstances = await Promise.all(PARTNER_GROUPS.map(async (id) => {
		const instances = (await client.getGroupInstances(id)).data;
		return {
			id,
			instances: instances.map((instance) => {
				return {
					...instance,
					moderatorsOnline: 0,
					isModerated: false
				} as ModeratedInstance
		})}
	}));
	return {
			instances,
			partnerGroups,
			partnerInstances: partnerInstances.filter(({ instances }) => instances.length > 0),
	};
};
