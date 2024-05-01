import React from 'react'
import logo from '../assets/lookscout.svg'
import icon1 from '../assets/social/1.svg'
import icon2 from '../assets/social/2.svg'
import icon3 from '../assets/social/3.svg'
import icon4 from '../assets/social/4.svg'
import icon5 from '../assets/social/5.svg'
import icon6 from '../assets/social/6.svg'
import hex from '../assets/hex.png'
const Footer = () => {
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
  return (
    <footer >
      {/* Footer with Tagline and Social Icons */}
      <div className='text-center p-2' style={{backgroundColor:'#2B63D9'}} >
        <div className='container-fluid  text-white p-2'>
          <p className='lh-sm pt-5' style={{fontSize: '10px'}}>1% OF THE INDUSTRY</p>
          <p className='lh-sm mx-4 px-2' style={{fontSize: "32px", fontWeight: 'bold'}}>Welcome to your new digital reality that which will rock your world truly at all.</p>
        </div>
        <div>
          <button className="btn text-primary bg-white m-2" type="submit" >Sign Up</button>
          <button className="btn btn-primary" type="submit"  >Log In</button>
        </div>
        <div className="container-fluid">
                <div className="row m-4 py-2">
                    {icons.map((icon, index) => (
                        <div className="col-12 col-md-2 p-2" key={index}>
                            <img src={icon} alt={`icon ${index + 1}`} className="img-fluid" />
                        </div>
                    ))}
                </div>
            </div>
      </div>

      {/* Main Footer */}
      <div className="row container-fluid mx-auto p-2">
  {/* 1st Column */}
  <div className="col-md-2 mx-auto col-12 custom-padding pb-3">
    <img className='img-fluid' src={logo} alt="Logo" />
    <p>Generate outside the box thinking with the possibility to target the low.</p>
    <div className="d-flex justify-content-between custom-social">
<i class="fa-brands fa-facebook mx-1"></i>
<i class="fa-brands fa-google mx-1"></i>
<i class="fa-brands fa-apple mx-1"></i>
<i class="fa-brands fa-instagram mx-1"></i>

    </div>
  </div>
  {/* 2nd Column */}
  <div className="col-md-2 mx-auto col-6">
    
    <ul style={{listStyleType:'none'}}>
      <h6>PRODUCTS</h6>
      <li>Features</li>
      <li>Solutions</li>
      <li>Integrations</li>
      <li>Enterprise</li>
    </ul>
  </div>
  {/* 3rd Column */}
  <div className="col-md-2 mx-auto col-6">
    <ul style={{listStyleType:'none'}}>
      <h6>RESOURCES</h6>
      <li>Partners</li>
      <li>Community</li>
      <li>Developers</li>
      <li>App</li>
      <li>Blog</li>
    </ul>
  </div>
  {/* 4th Column */}
  <div className="col-md-2 mx-auto col-6">
    <ul style={{listStyleType:'none'}}>
      <h6>ABOUT US</h6>
      <li>Our Competitions</li>
      <li>Channels</li>
      <li>Scale</li>
      <li>Watch the demo</li>
    </ul>
  </div>
  {/* 5th Column */}
  <div className="col-md-2 mx-auto col-6">
    <ul style={{listStyleType:'none'}}>
      <h6>COMPANY</h6>
      <li>About Us</li>
      <li>Leadership</li>
      <li>News</li>
    </ul>
  </div>
</div>

{/* Hex and Copy */}
<div className='container-fluid text-center p-2'>
<img src={hex} alt='hex' className="img-fluid pb-3" />
<p>&copy; 2023 Lookscout. All Rights Reserved.</p>
</div>

    </footer>
  )
}

export default Footer