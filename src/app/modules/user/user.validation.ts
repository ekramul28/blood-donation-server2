import { z } from 'zod';
import { bloodGroupEnum, emailRegex } from './user.constant';

const userValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
      })
      .min(1, { message: 'Name cannot be empty' }),
    email: z
      .string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
      })
      .refine((value) => emailRegex.test(value), {
        message: 'Invalid email address',
      }),
    password: z
      .string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string',
      })
      .min(4, { message: 'Password min 4 characters' })
      .max(8, { message: 'Password can not be more than 8 characters' }),
    conformPassword: z
      .string({
        required_error: 'Conform Password is required',
        invalid_type_error: 'Conform Password must be a string',
      })
      .min(1, { message: 'Conform Password cannot be empty' }),
    division: z
      .string({
        required_error: 'Division is required',
        invalid_type_error: 'Division must be a string',
      })
      .min(1, { message: 'Division cannot be empty' }),
    district: z
      .string({
        required_error: 'District is required',
        invalid_type_error: 'District must be a string',
      })
      .min(1, { message: 'District cannot be empty' }),
    bloodGroup: z.enum(bloodGroupEnum, {
      required_error: 'Blood group is required',
      invalid_type_error: 'Invalid blood group',
    }),
  }),
});

export const UserValidation = {
  userValidationSchema,
};
