import React, { useContext, useState } from 'react'
import loginIcons from '../assets/signin.gif'
import { useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Context from '../context';

const EditProfile = () => {
  const user = useSelector(state => state?.user?.user)
  const { fetchUserDetails} = useContext(Context)

  const [data, setData] = useState({
    userId : user?._id,
    name: user?.name,
    email: user?.email,
    profilePic: user?.profilePic,
    bio: user?.bio 
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

    if (user) {

      const dataResponse = await fetch(SummaryApi.updateUser.url, {
        method: SummaryApi.updateUser.method,
        headers: {
          "content-type": "application/json",
        },
        credentials: 'include',
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

    } else {
      toast.error("Please Login!")
      navigate("/login")
    }

  }

  return (
<div className='container-fluid' style={{backgroundColor:'#151B28'}} id="contactUs">
    <div className="row">
      <div className="container col-10 col-md-6 my-5 text-white rounded p-4" style={{backgroundColor:'#1C2534'}}>
        <div className='position-relative text-center'>
          <img className="rounded-circle " style={{ height: '80px', width:'80px'}} src={data?.profilePic || loginIcons} alt='Profile Pic'  />
          <form>
            <label htmlFor='uploadPhoto' className='text-small  bg-primary rounded p-1 m-1' style={{ cursor: 'pointer' }}>
              Choose Photo
              <input id='uploadPhoto' type='file' className='d-none' onChange={handleUploadPic} />
            </label>
          </form>
        </div>

        <form className='pt-6' onSubmit={handleSubmit}>
          <label htmlFor='name' className='form-label'>Full Name :</label>
          <input
            id='name'
            type='text'
            placeholder='Enter your name'
            name='name'
            value={data?.name}
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
            value={data?.email}
            onChange={handleOnChange}
            required
            className='form-control mb-3'
          />

          <label htmlFor='bio' className='form-label'>Bio :</label>
          <input
            id='bio'
            type='text'
            placeholder='Update your bio...'
            name='bio'
            value={data?.bio}
            onChange={handleOnChange}
            required
            className='form-control mb-3'
          />
          

          <div className='text-center'>
          <button
            type='submit'
            className='btn btn-primary mx-auto'
          >
            Update Profile
          </button>
          </div>
        </form>
      </div>
      </div>
    </div>

  )
}

export default EditProfile