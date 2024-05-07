import React, { useState } from 'react'
import loginIcons from '../assets/signin.gif'
import { Link, useNavigate } from 'react-router-dom';
// import imageTobase64 from '../helpers/imageTobase64';
// import SummaryApi from '../common';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (data.password === data.confirmPassword) {

      // const dataResponse = await fetch(SummaryApi.forgotPassword.url, {
      //   method: SummaryApi.forgotPassword.method,
      //   headers: {
      //     "content-type": "application/json"
      //   },
      //   body: JSON.stringify(data)
      // })

      // const dataApi = await dataResponse.json()

      // if (dataApi.success) {
      //   toast.success(dataApi.message)
      //   navigate("/login")
      // }

      // if (dataApi.error) {
      //   toast.error(dataApi.message)
      // }

      //TODO
      toast.success("Your request is under review. Contact Admin!")
      navigate("/")


    } else {
      toast.error("New password and Confirm new password do not match.")
    }

  }

  return (
<div className='container-fluid' style={{backgroundColor:'#151B28'}} id="contactUs">
    <div className="row">
      <div className="container col-10 col-md-6 my-5 text-white rounded p-4" style={{backgroundColor:'#1C2534'}}>
        <div className='position-relative text-center'>
          <img className="rounded-circle " style={{ height: '80px', width:'80px'}} src={loginIcons} alt='Profile Pic'  />
        </div>

        <form className='pt-6' onSubmit={handleSubmit}>
          <label htmlFor='email' className='form-label'>Email :</label>
          <input
            id='email'
            type='email'
            placeholder='Enter email'
            name='email'
            value={data.email}
            onChange={handleOnChange}
            required
            className='form-control mb-3'
            autocomplete="username"

          />

          <label htmlFor='password' className='form-label'>New Password :</label>
            <input
              id='password'
              type="password"
              placeholder='Enter password'
              value={data.password}
              name='password'
              onChange={handleOnChange}
              required
              className='form-control mb-3'
              autocomplete="new-password"

            />

          <label htmlFor='confirmPassword' className='form-label'>Confirm New Password :</label>
            <input
              id='confirmPassword'
              type= "password"
              placeholder='Enter confirm password'
              value={data.confirmPassword}
              name='confirmPassword'
              onChange={handleOnChange}
              required
              className='form-control mb-3'
              autocomplete="new-password"
            />

          <div className='text-center'>
          <button
            type='submit'
            className='btn btn-primary mx-auto'
          >
            Reset Password
          </button>
          </div>
        </form>

        <p className='my-3'>Create a new account? <Link to={"/signup"} className='text-danger'>Signup</Link></p>
      </div>
      </div>
    </div>

  )
}

export default ForgotPassword