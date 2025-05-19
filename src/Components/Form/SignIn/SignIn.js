import React, { useEffect } from 'react'
import './SignIn.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'

const initialValues = {
	username: '',
	password: ''
}

const validationSchema = Yup.object().shape({
	username: Yup.string()
		.email('Invalid UserName')
		.required('Required UserName'),
	password: Yup.string()
		.required('Required Password')
});

export default function SignIn() {
	const navigate = useNavigate();
	/**
	 * useEffect CLEAR sessionStorage use to save Usernmae
	 */
	useEffect(() => {
		sessionStorage.clear();
	}, []);

	/**
	 * signInFormSubmit on submit button 
	 * validate username
	 * valivate password
	 * @param {*} values get all value of form
	 * @returns 
	 */
	const signInFormSubmit = async (values) => {
		try {
			// Fetch user data from your JSON server
			const response = await axios.get('http://localhost:8000/user');
			const users = response.data;
			// Find the user with the entered email
			const user = users.find((user) => user.username === values.username);
			if (!user) {
				toast.error('Wrong Username', {
					position: 'top-right',
					autoClose: 3000,
				});
			}
			else if (user.password !== values.password) {
				toast.error('Wrong PassWord', {
					position: 'top-right',
					autoClose: 3000,
				});
				return;
			}
			else {
				toast.success('SignIn successfully', {
					position: 'top-right',
					autoClose: 3000,
				});
				sessionStorage.setItem('username', values.username);
				navigate('/dashboard');
			}
		} catch (error) {
			console.error('Login error:', error);
		}

	}

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: values => { signInFormSubmit(formik.values) }
	})

	return (
		<>
			<Navbar />
			<div className='signin-box'>
				<section>
					<span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
					<div className="signin">
						<div className="content">
							<form onSubmit={formik.handleSubmit}>
								<h2>Sign In</h2>
								<div className="form">
									<div className="inputBox">
										<input type="text" required name='username' onChange={formik.handleChange} value={formik.values.username} /> <i>Username</i>
										<p className='error'>{formik.errors.username}</p>
									</div>
									<div className="inputBox">
										<input type="password" required name='password' onChange={formik.handleChange} value={formik.values.password} /> <i>Password</i>
										<p className='error'>{formik.errors.password}</p>
									</div>
									<div className="links">
										<Link to='/forgotpassword'>Forgot Password</Link>
										<Link to='/signup'>Signup</Link>
									</div>
									<div className="inputBox">
										<input type="submit" value="Sign In" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</section>
				<ToastContainer />
			</div>
			<Footer />
		</>
	)
}
