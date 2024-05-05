import React, { useState } from 'react'
import loginIcons from '../assets/signin.gif'
import { Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const SignUp = () => {
  // const [showPassword, setShowPassword] = useState(false)
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
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

  const handleUploadPic = async (e) => {
    const file = e.target.files[0]

    const imagePic = await imageTobase64(file)

    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic
      }
    })

  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (data.password === data.confirmPassword) {

      const dataResponse = await fetch(SummaryApi.signUp.url, {
        method: SummaryApi.signUp.method,
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })

      const dataApi = await dataResponse.json()

      if (dataApi.success) {
        toast.success(dataApi.message)
        navigate("/login")
      }

      if (dataApi.error) {
        toast.error(dataApi.message)
      }

    } else {
      toast.error("Please check Password and Confirm password.")
    }

  }

  return (
<div className='container-fluid' style={{backgroundColor:'#151B28'}} id="contactUs">
    <div className="row">
      <div className="container col-10 col-md-6 my-5 text-white rounded p-4" style={{backgroundColor:'#1C2534'}}>
        <div className='position-relative text-center'>
          <img className="rounded-circle " style={{ height: '80px', width:'80px'}} src={data.profilePic || loginIcons} alt='Profile Pic'  />
          <form>
            <label htmlFor='uploadPhoto' className='text-small  bg-primary rounded p-1 m-1' style={{ cursor: 'pointer' }}>
              Choose Photo
              <input id='uploadPhoto' type='file' className='d-none' onChange={handleUploadPic} />
            </label>
          </form>
        </div>

        <form className='pt-6' onSubmit={handleSubmit}>
          <label htmlFor='name' className='form-label'>Name :</label>
          <input
            id='name'
            type='text'
            placeholder='Enter your name'
            name='name'
            value={data.name}
            onChange={handleOnChange}
            required
            className='form-control mb-3'
          />

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
            />

          <label htmlFor='confirmPassword' className='form-label'>Confirm Password :</label>
            <input
              id='confirmPassword'
              type= "password"
              placeholder='Enter confirm password'
              value={data.confirmPassword}
              name='confirmPassword'
              onChange={handleOnChange}
              required
              className='form-control mb-3'
            />

          <div className='text-center'>
          <button
            type='submit'
            className='btn btn-primary mx-auto'
          >
            Sign Up
          </button>
          </div>
        </form>

        <p className='my-3'>Already have an account? <Link to={"/login"} className='text-danger'>Login</Link></p>
      </div>
      </div>
    </div>

  )
}

export default SignUp