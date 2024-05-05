import React from 'react'
import logo from "../assets/lookscout.svg"
import userIcon from "../assets/userIcon.svg"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../store/userSlice';

// import Context from '../context';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

// import { Link, animateScroll as scroll } from "react-scroll";
const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  // const context = useContext(Context)
  const navigate = useNavigate()
  // const [menuDisplay, setMenuDisplay] = useState(false)


  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    })
    const data = await fetchData.json()

    if (data.success) {
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if (data.error) {
      toast.error(data.message)
    }

  }
  return (
    <header className="navbar navbar-expand-lg p-2 mainbg-color sticky-top" >
      <div className="container-fluid mx-4">
        <Link className="navbar-brand" to="/"><img src={logo} alt='Lookscout' /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav px-2 me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active nav-text" aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active nav-text" to="/" >Our Products</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle active nav-text" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Resources
              </Link>
              <ul className="dropdown-menu w-50">
                <li><Link className="dropdown-item" to="/">Action</Link></li>
                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active nav-text" to="/contact-us">Contacts</Link>
            </li>
          </ul>

          {user ?
            <div className="nav-item dropdown pe-3">
              <Link className="nav-link active nav-text" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  <img src={user?.profilePic || userIcon} className="rounded-circle border border-2" alt={user?.name} style={{ height: '40px', width: '40px' }} />
              </Link>
              <ul className="dropdown-menu custom-menu text-center">
                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item text-danger" onClick={handleLogout}>Logout <i className="fa-solid fa-right-from-bracket"></i></Link></li>
              </ul>
            </div>
            :
            <>
              <Link to='/signup' className="btn text-primary mx-2"  >Sign Up</Link>
              <Link to='/login' className="btn btn-primary"   >Log In</Link>
            </>}
          {/* <button className="btn text-primary mx-2" type="submit" >Sign Up</button>
            <button className="btn btn-primary" type="submit"  >Log In</button> */}
        </div>
      </div>
    </header>
  )
}

export default Header