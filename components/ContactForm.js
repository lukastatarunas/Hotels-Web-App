import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form } from '../styles/styles';

const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required!'),
    lastName: Yup.string().required('Last Name is required!'),
    username: Yup.string().max(16, 'Username must not be more than 16 characters!').required('Username is required!'),
    email: Yup.string().email('Email must be in a valid format!').required('Email is required!'),
    password: Yup.string().min(8, 'Password must be at least 8 characters!').required('Password is required!'),
    confirmPassword: Yup.string().required('Password confirmation is required!').oneOf([Yup.ref('password'), null], 'Passwords must match!')
});

const ContactForm = () => {
    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema,
        onSubmit: values => {
            alert('Submitted successfully!');
            console.log(values);
            values = {};
            console.log(values);
        }
    });

    return (
        <Form onSubmit={handleSubmit}>
            <input
                type='text'
                name='firstName' 
                onChange={handleChange} 
                values={values.firstName}
            />
            {errors.firstName ? errors.firstName : null}
            <input
                type='text'
                name='lastName' 
                onChange={handleChange} 
                values={values.lastName}
            />
            {errors.lastName ? errors.lastName : null}
            <input
                type='text'
                name='username' 
                onChange={handleChange} 
                values={values.username}
            />
            {errors.username ? errors.username : null}
            <input
                type='email'
                name='email' 
                onChange={handleChange} 
                values={values.email}
            />
            {errors.email ? errors.email : null}
            <input
                type='password'
                name='password' 
                onChange={handleChange} 
                values={values.password}
            />
            {errors.password ? errors.password : null}
            <input
                type='password'
                name='confirmPassword' 
                onChange={handleChange} 
                values={values.confirmPassword}
            />
            {errors.confirmPassword ? errors.confirmPassword : null}
            <button type='submit'>Submit</button>
        </Form>
    );
}

export default ContactForm;