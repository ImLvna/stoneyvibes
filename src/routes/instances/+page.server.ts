import { GROUP_ID, PARTNER_GROUPS } from '$lib/constants';
import { init } from '$lib/server/vrchat';
import { cachedRequest } from '$lib/server/vrchat/cache';
import type { ModeratedInstance } from '$lib/vrchat/instance';
// import { AuthenticationApi } from '$lib/server/vrchat';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const client = await init();
	const modsOnline = (
		await cachedRequest(1000 * 60, 'getFriends', client.getFriends, { offline: false })
	).data;
	const instances = (
		await cachedRequest(1000 * 60, 'getGroupInstances', client.getGroupInstances, GROUP_ID)
	).data.map((instance) => {
		const mods = modsOnline.filter(({ location }) => location === instance.location);
		return {
			...instance,
			moderatorsOnline: mods.length,
			isModerated: true
		} as ModeratedInstance;
	});
	const partnerGroups = await Promise.all(
		PARTNER_GROUPS.map(
			async (id) => (await cachedRequest(1000 * 60 * 30, 'getGroup', client.getGroup, id)).data
		)
	);
	const partnerInstances = await Promise.all(
		PARTNER_GROUPS.map(async (id) => {
			const instances = (
				await cachedRequest(1000 * 60, 'getGroupInstances', client.getGroupInstances, id)
			).data;
			return {
				id,
				instances: instances.map((instance) => {
					return {
						...instance,
						moderatorsOnline: 0,
						isModerated: false
					} as ModeratedInstance;
				})
			};
		})
	);
	return {
		instances,
		partnerGroups,
		partnerInstances: partnerInstances.filter(({ instances }) => instances.length > 0)
	};
};

export const prerender = false;
