import { type Request, type Response , type NextFunction } from 'express';
import { type AnyZodObject, ZodError } from 'zod';

export const validationRequest = (schema: AnyZodObject) =>
  async ( req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          error: "Validation Failed",
          details: error.errors
        });
      }
      next(error);
    }
    };
