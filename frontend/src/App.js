// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <ToastContainer />
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
