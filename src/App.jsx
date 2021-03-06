import React, { useState, useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home';
import FooterComponent from './components/FooterComponent';

import './css/theme1.css'

function App() {
  const [windowScrollY,setWindowScrollY] = useState(window.pageYOffset);

  useEffect(() => {
      const onScroll = () =>{
          setWindowScrollY(window.pageYOffset)
      }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
  },[windowScrollY]);

  return (
    <>

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home windowScrollY={windowScrollY}/>} />
      </Routes>

    <FooterComponent />
  </>
  );
}

export default App;
