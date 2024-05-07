import React, { useContext, useState } from 'react'
import loginIcons from '../assets/signin.gif'
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const LogIn = () => {
  const { fetchUserDetails} = useContext(Context)

  const [data, setData] = useState({
    email: "",
    password: ""
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

      try {
        const dataResponse = await fetch(SummaryApi.logIn.url, {
          method: SummaryApi.logIn.method,
          credentials : 'include',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
        })
  
        const dataApi = await dataResponse.json()
  
        if (dataApi.success) {
          toast.success(dataApi.message)
          navigate("/profile")
          fetchUserDetails()
        }
  
        if (dataApi.error) {
          toast.error(dataApi.message)
        }
        
      } catch (err) {
        toast.warn("Could not connect to Database. "+ err.message)
      }
    }


  return (
<div className='container-fluid' style={{backgroundColor:'#151B28'}} id="contactUs">
    <div className="row">
      <div className="container col-10 col-md-6 my-5 text-white rounded p-4" style={{backgroundColor:'#1C2534'}}>
        <div className='position-relative text-center'>
          <img className="rounded-circle " style={{ height: '80px', width:'80px'}} src={loginIcons} alt='Login Icon'  />
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
            autoComplete="username"

          />

          <label htmlFor='password' className='form-label'>Password :</label>
            <input
              id='password'
              type="password"
              placeholder='Enter password'
              value={data.password}
              name='password'
              onChange={handleOnChange}
              required
              className='form-control mb-3'
              autoComplete="current-password"
            />

          <div className='text-center'>
          <button
            type='submit'
            className='btn btn-primary mx-auto'
          >
            Login
          </button>
          </div>
        </form>

        <Link to={"/forgot-password"} className='text-danger my-3'>Forgot Password?</Link>
      </div>
      </div>
    </div>

  )
}

export default LogIn