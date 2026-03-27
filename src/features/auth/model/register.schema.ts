import { z } from 'zod';

export const registerSchema = z.object({
	email: z.email('Invalid email'),
	password: z.string().min(6, 'At least 6 chars'),
	firstName: z.string().min(2, 'At least 2 chars'),
	lastName: z.string().min(2, 'At least 2 chars')
});

export type RegisterSchema = z.infer<typeof registerSchema>;
