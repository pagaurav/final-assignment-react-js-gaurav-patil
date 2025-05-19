import React from 'react'
import './NavbarDashboard.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NavbarDashboard() {
  const navigate = useNavigate();
  
  /**
   * logOutButton on click button go to login page 
   * and clear session storage
   */
  const logOutButton = () => {
    toast.success('LogOut successfully ', {
      position: 'top-right',
      autoClose: 3000,
    });
    navigate('/SignIn')
  }
  return (
    <>
      <nav className="navbar  navbar-expand-md bg-body-tertiary fixed-top navbar-dark bg-dark" >
        <div className="container-fluid">
          <NavLink className="navbar-brand navbar-brand" to='/Dashboard'>Login System</NavLink>
          <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <form class="form-inline my-2 my-lg-0 pr-3">
              <button class="logoutbtn btn btn-outline-success my-2 my-sm-0" onClick={logOutButton} type="button">LogOut</button>
            </form>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </>
  )
}
