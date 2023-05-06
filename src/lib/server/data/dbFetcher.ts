


export async function fetchUserFeature({ getSession, supabase, feature }) {
	const session = await getSession()
	const { data, error } = await supabase
		.from('profiles')
		.select(feature)
		.eq('id', session.user.id)
	if (error) throw error
	return { bio: data[0].bio }
}