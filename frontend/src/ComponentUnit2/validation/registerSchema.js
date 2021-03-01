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
		.min(8, 'Password is to short - must be at least * characters long.')
		.matches(
			'^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
			'Password must contain a minimum of eight characters, at least one letter, one number and one special character.'
		),
	confirmPassword: yup
		.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match.'),
});
