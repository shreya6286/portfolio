import { z } from 'zod';

export const UserContactSchema = z.object({
	_id: z.string({
		invalid_type_error: '_id must be of type string'}).optional(),
    name: z.string({
        required_error: 'Enter name',
        invalid_type_error: 'name must be of type string'}).max(30, { message: 'name field can have maximum 30 characters' }),
    email_id: z.string({
		required_error: 'Enter email_id',
		invalid_type_error: 'email_id must be of type string'}).max(30, { message: 'email_id field can have maximum 30 characters' }).email('Please enter valid email id'),
    msg: z.string({
        required_error: 'Enter message',
		invalid_type_error: 'message must be of type string'}),
})