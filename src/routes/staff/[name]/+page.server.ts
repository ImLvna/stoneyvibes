import { init } from '$lib/server/vrchat';
import { cachedRequest } from '$lib/server/vrchat/cache';
import { staff } from '$lib/staff';
import { error } from '@sveltejs/kit';
// import { AuthenticationApi } from '$lib/server/vrchat';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params }) => {
  const client = await init();
  const member = staff.find((member) => member.vrchat_name === params.name);
  if (!member) {
    error(404, 'Not found');
  };
  const vrchatUser = (await cachedRequest(1000 * 60 * 30, "getUser", client.getUser, member.vrchat_id)).data;
	return {
      vrchat: vrchatUser
	};
};

export const prerender = false;