import React from 'react'
import './SignUp.css'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../Footer/Footer';
import axios from 'axios';

const initialValues = {
	firstname: '',
	lastname: '',
	username: '',
	password: '',
	dateofbirth: ''
}

/**
 * validationSchema Yup validation
 */
const validationSchema = Yup.object().shape({
	firstname: Yup.string()
		.min(2, 'Firstname must be at least 6 characters')
		.max(20, 'Firstname must not exceed 20 characters')
		.required('Firstname is required')
		.matches(/[A-Z a-z]/, "Firstname should be contain charcter  only "),
	lastname: Yup.string()
		.min(2, 'Lastname must be at least 6 characters')
		.max(20, 'Lastname must not exceed 20 characters')
		.required('Lastname is required')
		.matches(/[A-Z a-z]/, "Lastname should be contain charcter  only "),
	username: Yup.string()
		.email('Invalid UserName')
		.required('UserName Required '),
	password: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required')
		.matches(/[0-9]/, "Password should be contain minimum one digit")
		.matches(/[a-z]/, "Password should be contain minimum lower case letter")
		.matches(/[A-Z]/, "Password should be contain minimum one capital case letter")
		.matches(
			/([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/,
			"Password should be contain minimum one special case Character"
		),
	dateofbirth: Yup.date()
		.max(new Date(), "Future Date Cannot Select")
		.required('Date Of Birth Required ')
});

export default function SignUp() {
	const navigate = useNavigate();

	/**
	 * SignUpFormSubmit submit the form post value in json
	 * @param {*} values get all value in formik
	 */
	const signUpFormSubmit = async (values) => {
		try {
			// Fetch user data from your JSON server
			const response = await axios.get('http://localhost:8000/user');
			const users = response.data;
			// Find the user with 
			const user = users.find((user) => user.username === values.username);
			
			if (!user) {
				fetch('http://localhost:8000/user', {
					method: 'POST',
					headers: { "content-type": "application/json" },
					body: JSON.stringify(values)
				}).then(() => {
					toast.success('SignUp successfully ', {
						position: 'top-right',
						autoClose: 3000,
					});
					navigate('/signin')
				})
			}
			//if username in data base then do not stored same name user detail
			else {
				toast.error('same username user already present ', {
					position: 'top-right',
					autoClose: 3000,
				});
			}
		} catch (error) {
			console.error('Login error:', error);
		}
	}

	/**
	 * formik function use 
	 */
	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: () => { signUpFormSubmit(formik.values) }
	})
	return (
		<>
			<Navbar />
			<div className='signup-box'>
				<section>
					<span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
					<div className='signup'>
						<div className="content">
							<form onSubmit={formik.handleSubmit}>
								<h2>Sign Up</h2>
								<div className="form">
									<div className="inputBox">
										<input type="text" name='firstname' onChange={formik.handleChange} value={formik.values.firstname} placeholder='Ex.virat' /><i>FirstName</i>
										<p className='error'>{formik.errors.firstname}</p>
									</div>
									<div className="inputBox">
										<input type="text" name='lastname' onChange={formik.handleChange} value={formik.values.lastname} placeholder='Ex.kohli' /> <i>LastName</i>
										<p className='error'>{formik.errors.lastname}</p>
									</div>
									<div className="inputBox">
										<input type="text" name='username' onChange={formik.handleChange} value={formik.values.username} placeholder='Ex.xyz@gmail.com' /> <i>Username</i>
										<p className='error'>{formik.errors.username}</p>
									</div>
									<div className="inputBox">
										<input type="password" name='password' onChange={formik.handleChange} value={formik.values.password} placeholder='Ex.Pass@123' /> <i>Password</i>
										<p className='error'>{formik.errors.password}</p>
									</div>
									<div className="inputBox">
										<input type="date" name='dateofbirth' onChange={formik.handleChange} value={formik.values.dateofbirth} /> <i>Date Of Birth</i>
										<p className='error'>{formik.errors.dateofbirth}</p>
									</div>
									<div className="inputBox">
										<input type="submit" value="Sign Up" />
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
