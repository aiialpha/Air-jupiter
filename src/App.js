import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import 'boxicons'
import 'boxicons/css/boxicons.min.css'
import {useLocation} from 'react-router-dom';
import Layouts from './Components/Layouts';
import { useEffect } from 'react';

function App() {
  const ScrollToTop = () => {
    const{pathname} = useLocation()
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;  
  };
  return (
    <>
      <ScrollToTop />
      <Layouts />
    </>
  );
}

export default App;
