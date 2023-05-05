import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from "@sveltejs/kit"
import {signInSchema, tokenSchema} from "$lib/zod/schemas" 



export const load = async ({ locals: { getSession } }) => {
	const session = await getSession()
	if (session) throw redirect(302, '/')
}




let tempEmail = ""

export const actions = {
	otp_init: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData())
		tempEmail = body.email as string
		
		try {			
			signInSchema.safeParse(tempEmail)
		} catch (error) {
			return fail(400, {
				error: "Invalid credentials",
			})
		}


		const { data, error: err } = await locals.supabase.auth.signInWithOtp({
			email: tempEmail,
		})

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: "Invalid credentials",
				})
			}
			return fail(500, {
				message: "Server error. Try again later.",
			})
		}

		return {
			sent: true
		}
	},


	otp_verif: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData())

		
		try {			
			tokenSchema.safeParse(body.token)
		} catch (error) {
			return fail(400, {
				error: "Invalid credentials",
				sent: true,
			})
		}


		const { data, error: err } = await locals.supabase.auth.verifyOtp({
            email: tempEmail,
			token: body.token as string,
            type: 'email',
		})
	
		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: "Invalid credentials",
					sent: true,
				})
			}
			return fail(500, {
				message: "Server error. Try again later.",
				sent: true,
			})
		}

		throw redirect(303, "/dashboard")
	},
}