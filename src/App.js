import './App.css';
import Navbar from './components/navbarComponent/navbar.component';
import Footer from './components/footerComponent/footer.component';
import HomePage from './pages/homePage/hompage';

import { IoLogoWhatsapp } from "react-icons/io";
import { FaAngleUp } from "react-icons/fa";

import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [scrollUp, setScrollUp] = useState(false);
  const [arrowScrollUp, setArrowScrollUp] = useState(false);

  const handleScroll = () => {
    if(window.scrollY >= 50){
      setScrollUp(true);
    }else{
      setScrollUp(false);
    }
    if (window.scrollY >= 50) {
      setArrowScrollUp(true);
    } else {
      setArrowScrollUp(false);
    }
  }
  window.addEventListener('scroll', handleScroll);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <a
        href="https://wa.me/message/6NJWVCNULGBTC1"
        className={`whatsappLogBox ${scrollUp && "scroll"}`}
      >
        <IoLogoWhatsapp className="whatsappLogo" />
      </a>
      <div
        className={`arrowUpBox ${arrowScrollUp && "arrowScroll"}`}
        onClick={handleScrollTop}
      >
        <FaAngleUp className="arrowUp" />
      </div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
