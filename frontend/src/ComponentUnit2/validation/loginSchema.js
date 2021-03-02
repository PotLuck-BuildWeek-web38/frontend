import * as yup from 'yup';

const loginSchema = yup.object().shape({
	name: yup.string().required('Please enter a name.'),
	password: yup.string().required('Please enter your password.'),
});

export default loginSchema;
