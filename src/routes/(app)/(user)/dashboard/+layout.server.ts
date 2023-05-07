import { redirect } from '@sveltejs/kit'



async function sessionGateway({ locals: { getSession } }) {
	const session = await getSession()
	if (!session) throw redirect(302, '/auth/sign-in')
	return session
}




export const load = async ({ locals: { getSession, supabase } }) => {
	const session = await sessionGateway({ locals: { getSession } })

	
	
	async function fetchUserFeature(tableName: string) {
		const { data, error } = await supabase.from(tableName).select().eq('id', session.user.id).single();
		if (error) throw error;
		return data;
	}

	async function fetchUserMessages() {
		const { data, error } = await supabase.from('message').select().eq('recipient_id', session.user.id);
		if (error) throw error;
		return data;
	}

	return {
		user: session.user,
		bio: await fetchUserFeature('bio'),
		messageSettings: await fetchUserFeature('message_settings'),
		messages: await fetchUserMessages(),
		contact: await fetchUserFeature('contact'),
	}
}