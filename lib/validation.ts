import { z } from 'zod'

export const UserFormValidation = z.object({
    name: z.string()
        .min(2, 'Name is too short')
        .max(255, 'Name is too long'),
    email: z.string().email('Invalid email address'),
    phone: z.string()
        .regex(/^\+?[0-9]{10,14}$/, 'Invalid phone number')
})
