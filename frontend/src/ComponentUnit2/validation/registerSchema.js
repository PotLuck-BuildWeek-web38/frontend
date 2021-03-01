import * as yup from 'yup';

const registerSchema = yup.object().shape({
	name: yup
		.string()
		.required('Please enter a name.')
		.min(3, 'Username must be at least 3 characters long.'),

	email: yup.string().email().required('Please enter your email.'),
	password: yup
		.string()
		.required('Please enter a password.')
		.min(8, 'Password is to short - must be at least 8 characters.'),
	// .matches(
	// 	'(?=.*?[a-z])',
	// 	'Password must contain a minimum of eight characters, at least one uppercase letter, one lowercase letter and one number.'
	// ),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match.'),
});

export default registerSchema;
