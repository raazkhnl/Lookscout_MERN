import React from 'react'

const ContactUs = () => {
  return (
    <div style={{backgroundColor:'#151B28'}}>
      <div className="container p-5 text-white">
        <div className='text-center '>
        <h2>Get In Touch With Us</h2>
                <p className='text-muted'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
                <form style={{backgroundColor:'#1C2534'}} className='container p-4'rounded>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="form-control placeholder" id="firstName" placeholder="First name"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">Email</label>
                            <input type="email" className="form-control placeholder" id="inputEmail" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="tel" className="form-control placeholder" id="phoneNumber" placeholder="+000" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="dropdown">Get In Touch With Us</label>
                            <select id="dropdown" className="form-control placeholder">
                                <option selected>Choose...</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group" style={{padding:'1px'}}>
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control placeholder" id="message" rows="3" placeholder="Hi! We are Lookscout..."></textarea>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="agree" />
                            <label className="form-check-label" htmlFor="agree">
                                I agree with Lookscout Privacy Policy
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    </div>
  )
}

export default ContactUs