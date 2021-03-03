import * as yup from 'yup';

const registerSchema = yup.object().shape({
	// const registerSchema = yup.object().shape({
	name: yup
		.string()
		.required('Please enter a name.')
		.min(3, 'Username must be at least 3 characters long.'),

	email: yup.string().email().required('Please enter your email.'),
	password: yup
		.string()
		.required('Please enter a password.')
		.min(6, 'Password is to short - must be at least 8 characters.'),
	// confirmPassword: yup
	// 	.string()
	// 	.oneOf([yup.ref('password'), null], 'Password does not match.')
	// 	.required('Password confirmation required.'),
});

export default registerSchema;
