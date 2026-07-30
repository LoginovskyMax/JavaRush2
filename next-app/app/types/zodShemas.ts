import { z } from 'zod';

export const UserSchema = z.object({
    name: z.string().min(3, { message: 'Имя должен быть длиннее 3 символов' }),
});