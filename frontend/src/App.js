// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';

import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import SummaryApi from './common';
import { setUserDetails } from './store/userSlice';
import { useEffect } from 'react';
import Context from './context';

function App() {
  const dispatch = useDispatch()
  const fetchUserDetails = async()=>{
    try {
      const dataResponse = await fetch(SummaryApi.current_user.url,{
        method : SummaryApi.current_user.method,
        credentials : 'include'
      })
  
      const dataApi = await dataResponse.json()
  
      if(dataApi.success){
        dispatch(setUserDetails(dataApi.data))
      }
      
    } catch (err) {
      toast.warn("Could not connect to Database. "+ err.message)
      
    }
}
useEffect(()=>{
  /**user Details */
  fetchUserDetails()
},[])
  return (
    <>
    <Context.Provider value={{
          fetchUserDetails, // user detail fetch 
      }}>
      <Header/>
      <ToastContainer />
      <main>
        <Outlet/>
      </main>
      <Footer/>
      </Context.Provider>
    </>
  );
}

export default App;
