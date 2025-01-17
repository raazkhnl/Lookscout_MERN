// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';

import { ToastContainer } from 'react-toastify';
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
  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: 'include',
    })

    const dataApi = await dataResponse.json()

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data))
    }
  }
  useEffect(() => {
    /**user Details */
    fetchUserDetails() // eslint-disable-next-line
  }, [])
  return (
    <>
      <Context.Provider value={{
        fetchUserDetails, // user detail fetch 
      }}>
        <Header />
        <ToastContainer />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
