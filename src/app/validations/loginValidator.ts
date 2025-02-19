import { z } from 'zod';

export const LoginValidator = z.object({
  email: z.string().email().max(100)
    .regex(/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~.-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/),
  password: z.string().min(6).max(24)
    .regex(/[A-Za-z]/)
    .regex(/[0-9]/)
    .regex(/[!@#$%^&*(),.?":{}|<>]/)
    .regex(/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~.-]+$/)
})

export const RegisterValidator = z.object({
  username: z.string().max(100).nonempty(),
  telephone: z.string().regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Invalid phone number format. Use +7 (999) 999-99-99"),
  email: z.string().email().max(100)
    .regex(/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~.-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/),
  password: z.string().min(6).max(24)
    .regex(/[A-Za-z]/)
    .regex(/[0-9]/)
    .regex(/[!@#$%^&*(),.?":{}|<>]/)
    .regex(/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~.-]+$/),
  repeatPassword: z.string().min(6).max(24)
    .regex(/[A-Za-z]/)
    .regex(/[0-9]/)
    .regex(/[!@#$%^&*(),.?":{}|<>]/)
    .regex(/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~.-]+$/)
})
