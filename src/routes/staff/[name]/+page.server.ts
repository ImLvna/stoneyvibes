import { Client, init } from '$lib/server/vrchat';
import { staff } from '$lib/staff';
import { error } from '@sveltejs/kit';
// import { AuthenticationApi } from '$lib/server/vrchat';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params }) => {
  await init();
	const client = await Client;
  const member = staff.find((member) => member.vrchat_name === params.name);
  if (!member) {
    error(404, 'Not found');
  };
  const vrchatUser = (await client.getUser(member.vrchat_id)).data;
	return {
      vrchat: vrchatUser
	};
};

export const prerender = false;