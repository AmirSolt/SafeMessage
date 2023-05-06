import { redirect } from '@sveltejs/kit'


async function sessionGateway({ locals: { getSession } }) {
	const session = await getSession()
	if (!session) throw redirect(302, '/auth/sign-in')
	return session
}


async function fetchUserFeature(supabase, tableName: string, user_id: string | undefined) {
	const { data, error } = await supabase.from(tableName).select().eq('id', user_id);
	if (error) throw error;
	console.log('..........');
	console.log(data);
	return data;
}



export const load = async ({ locals: { getSession, supabase } }) => {
	const session = await sessionGateway({ locals: { getSession } })

	return {
		user: session.user,
		bio: await fetchUserFeature(supabase, 'bio', session.user.id),
		messageSettings: await fetchUserFeature(supabase, 'message_settings', session.user.id),
	}
}