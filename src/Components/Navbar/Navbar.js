import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
	return (
		<>
			<nav className="navbar  navbar-expand-md bg-body-tertiary fixed-top navbar-dark bg-dark" >
				<div className="container-fluid">
					<NavLink className="navbar-brand navbar-brand" to='/'>Login System</NavLink>
					<button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink to='/' className="nav-link active" aria-current="page">Home</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='/signin' className="nav-link" >Sing In</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link " to='/signup'>Sing Up</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}
