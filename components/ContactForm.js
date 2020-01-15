import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Button } from '../styles/styles';

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
            
        }
    });

    return (
        <Form onSubmit={handleSubmit}>
            <h2>Contact Form</h2>
            <Input
                type='text'
                name='firstName'
                placeholder='First Name'
                onChange={handleChange} 
                values={values.firstName}
            />
            {errors.firstName ? errors.firstName : null}
            <Input
                type='text'
                name='lastName'
                placeholder='Last Name'
                onChange={handleChange} 
                values={values.lastName}
            />
            {errors.lastName ? errors.lastName : null}
            <Input
                type='text'
                name='username'
                placeholder='Username'
                onChange={handleChange} 
                values={values.username}
            />
            {errors.username ? errors.username : null}
            <Input
                type='email'
                name='email'
                placeholder='Email'
                onChange={handleChange} 
                values={values.email}
            />
            {errors.email ? errors.email : null}
            <Input
                type='password'
                name='password'
                placeholder='Password'
                onChange={handleChange} 
                values={values.password}
            />
            {errors.password ? errors.password : null}
            <Input
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                onChange={handleChange} 
                values={values.confirmPassword}
            />
            {errors.confirmPassword ? errors.confirmPassword : null}
            <Link href='/hotels'>
                <Button type='submit'>Submit</Button>
            </Link>
        </Form>
    );
}

export default ContactForm;