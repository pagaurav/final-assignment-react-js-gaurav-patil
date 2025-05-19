import React from 'react'
import Navbar from '../../Navbar/Navbar'
import axios from 'axios';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
	username: '',
	dateofbirth: ''
}

/**
 * validate validationSchema
 */
const validationSchema = Yup.object().shape({
	username: Yup.string()
		.email('Invalid UserName')
		.required('Required UserName'),
	dateofbirth: Yup.date()
		.max(new Date(), "Future Date Cannot Select")
		.required('Required Date Of Birth')
});

export default function ForgotPassword() {
	const navigate = useNavigate();

	/**
	 * resetFormSubmit on submit button 
	 * validate username
	 * valivate date of birth 
	 * and reset password Test123$
	 * @param {*} values get all value
	 * @returns 
	 */
	const resetFormSubmit = async (values) => {
		try {
			// Fetch user data from your JSON server
			const response = await axios.get('http://localhost:8000/user');
			const users = response.data;

			const user = users.find((user) => user.username === values.username);
			if (!user) {
				toast.error('Wrong Username', {
					position: 'top-right',
					autoClose: 3000,
				});
			}
			else if (user.dateofbirth !== values.dateofbirth) {
				toast.error('Wrong Date of Birth', {
					position: 'top-right',
					autoClose: 3000,
				});
				return;
			}
			else {
				fetch('http://localhost:8000/user/' + user.id, {
					method: 'PUT',
					headers: { "content-type": "application/json" },
					body: JSON.stringify({
						"firstname": user.firstname, "lastname": user.lastname, "username": user.username, "password": "Test123$",
						"dateofbirth": user.dateofbirth,
					})
				}).then(() => {
					toast.success('Reset PassWord : Test123$  successfully', {
						position: 'top-right',
						autoClose: 3000,
					});
					navigate('/SignIn');
				})
			}
		} catch (error) {
			toast.error('Login error:', error);
		}
	}

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: values => { resetFormSubmit(formik.values) }
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
								<h2>Reset Password</h2>
								<div className="form">
									<div className="inputBox">
										<input type="text" name='username' onChange={formik.handleChange} value={formik.values.username} /> <i>Username</i>
										<p className='error'>{formik.errors.username}</p>
									</div>
									<div className="inputBox">
										<input type="date" name='dateofbirth' onChange={formik.handleChange} value={formik.values.dateofbirth} /> <i>Date Of Birth</i>
										<p className='error'>{formik.errors.dateofbirth}</p>
									</div>
									<div className="inputBox">
										<input type="submit" value="Submit" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</section>
				<ToastContainer />
			</div>
		</>
	)
}
