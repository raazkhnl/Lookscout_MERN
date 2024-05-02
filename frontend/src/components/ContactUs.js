import React, { useState } from 'react'
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const [data, setData]= useState({
        fullName:"",
        email:"",
        name:"",
        dropdown:"",
        message:"",
        agree: false,
    })
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: (type === 'checkbox' ? checked : value),
        }));
    };
    
    const handleSubmit = async(e)=>{
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.contactUs.url,{
            method : SummaryApi.contactUs.method,
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        const dataApi = await dataResponse.json()

        if(dataApi.success){
            toast.success(dataApi.message)
            setData({
                fullName:"",
                email:"",
                name:"",
                dropdown:"",
                message:"",
                agree: false,
            })
            navigate('/')
        }
        if(dataApi.error){
            toast.error(dataApi.message)
        }

        // console.log('data', dataApi)
    }
    // useEffect(() => {
    //     console.log("Data:", data);
    // }, [data]);

  return (
    <div style={{backgroundColor:'#151B28'}} id="contactUs">
      <div className="container p-5 mt-4 text-white" >
        <div className='text-center' id="contactSec">
        <h2>Get In Touch With Us</h2>
                <p className='text-muted'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
                <form style={{backgroundColor:'#1C2534'}} className='container p-4 rounded' onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" name='fullName' value={data.fullName} onChange={handleOnChange} className="form-control custom-placeholder" id="fullName" placeholder="Full name" required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email</label>
                            <input type="email"  name='email' value={data.email} onChange={handleOnChange} className="form-control custom-placeholder" id="inputEmail" placeholder="Email" required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel"  name='phone' value={data.phone} onChange={handleOnChange} className="form-control custom-placeholder" id="phoneNumber" placeholder="+000" required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="dropdown">Get In Touch With Us</label>
                            <select id="dropdown"  name='dropdown' onChange={handleOnChange} className="form-control custom-placeholder">
                                <option value="">Choose...</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group" style={{padding:'1px'}}>
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control custom-placeholder"  name='message' value={data.message} onChange={handleOnChange} id="message" rows="3" placeholder="Hi! We are Lookscout..." required></textarea>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name='agree' checked={data.agree} onChange={handleOnChange}  id="agree" />
                            <label className="form-check-label" htmlFor="agree">
                                I agree with Lookscout's Privacy Policy.
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!data.agree}>Submit</button>
                </form>
            </div>
    </div>
  )
}

export default ContactUs