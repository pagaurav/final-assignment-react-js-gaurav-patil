import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarDashboard from './NavbarDashboard';
import Footer from '../Footer/Footer';
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  /**
   * sessionStorage clear on logout
   */
  useEffect(() => {
    let username = sessionStorage.getItem('username');
    if (username === '' || username === null) {
      navigate('/signin')
    }
  });
  return (
    <>
      <NavbarDashboard />
      <div className='dashboard'>
        <h1 className='dashboardHeading'>Welcome to Dashboard</h1>
      </div>
      <Footer />
      <ToastContainer />
    </>
  )
}
