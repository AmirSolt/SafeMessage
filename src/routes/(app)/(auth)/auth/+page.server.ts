import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from "@sveltejs/kit"
import {signInSchema, tokenSchema} from "$lib/zod/schemas" 



export const load = async ({ locals: { getSession } }) => {
	const session = await getSession()
	if (session) throw redirect(302, '/')
}





export const actions = {
	otp_init: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData())
		const email = body.email as string

		try {			
			signInSchema.safeParse(email)
		} catch (error) {
			return fail(400, {
				error: "Invalid credentials",
			})
		}


		const { data, error: err } = await locals.supabase.auth.signInWithOtp({
			email: email,
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
			sent: true,
			email: email,
		}
	},


	otp_verif: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData())
		const email = body.email as string
		const token = body.token as string
		
		try {			
			signInSchema.safeParse(email)
			tokenSchema.safeParse(token)
		} catch (error) {
			return fail(400, {
				error: "Invalid credentials",
			})
		}


		const { data, error: err } = await locals.supabase.auth.verifyOtp({
            email: email,
			token: token,
            type: 'email',
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

		throw redirect(303, "/dashboard")
	},
}