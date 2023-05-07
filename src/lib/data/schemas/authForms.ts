import { z } from 'zod'

export const emailSignInSchema = z.object({
	email: z.string().email(),
})


export const emailOTPSchema = z.object({
	email: z.string().email(),
    token: z.string().regex(/^[0-9]*$/, {message: "Token must only contain numbers"}).length(6, {message: "Token must be 6 digits long"}),
})