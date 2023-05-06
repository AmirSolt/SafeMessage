import { redirect } from '@sveltejs/kit'


async function sessionGateway({ locals: { getSession } }) {
	const session = await getSession()
	if (!session) throw redirect(302, '/auth/sign-in')
}




export const load = async ({ locals: { getSession, supabase } }) => {
	await sessionGateway({ locals: { getSession } })

}