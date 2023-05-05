import { z } from 'zod'

export const signInSchema = z.object({
	email: z.string().email(),
})


export const tokenSchema = z.object({
    token: z.string().length(6),
})