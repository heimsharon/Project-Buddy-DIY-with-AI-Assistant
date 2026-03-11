import { z } from 'zod';

export const projectDetailsSchema = z
  .object({
    projectName: z
      .string()
      .trim()
      .min(1, 'Please Enter Project Details.')
      .max(100),
    description: z.string().max(1000).optional(),
    startDate: z.string().date().nullable().optional(),
    endDate: z.string().date().nullable().optional(),
  })
  .refine(
    data => !data.startDate || !data.endDate || data.endDate >= data.startDate,
    {
      message: 'End Date Must Be After Start Date',
      path: ['endDate'],
    }
  );
