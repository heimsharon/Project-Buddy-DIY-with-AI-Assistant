import { z } from 'zod';

export const registerSchema = z.object ({
  username: z.string().min(3).max(50).trim(),
  email: z.string().email().toLowerCase(),
  password: z.string()

  .min(10, "Password Must Be at Least 10 Characters")
  .regex(/[A-Z]/, "Must Include UpperCase Letter")
  .regex(/[a-z]/, "Must Include LowerCase Letter")
  .regex(/[0-9]/, "Must Include Number")
  .regex(/[^\w\s]/, "Must Include Special Character")
});

export const loginSchema = z.object ({
  email: z.string().email(),
  password: z.string().min(1)
});