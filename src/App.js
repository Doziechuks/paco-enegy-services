import React, { lazy, Suspense, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { IoLogoWhatsapp } from "react-icons/io";
import { FaAngleUp } from "react-icons/fa";

import Navbar from "./components/navbarComponent/navbar.component";
import Footer from "./components/footerComponent/footer.component";
import Spinner from "./components/spinner/Spinner";

const HomePage = lazy(() => import("./pages/homePage/hompage"));
const AboutPage = lazy(() => import("./pages/aboutPage/aboutPage"));
const ContactPage = lazy(() => import("./pages/contactPage/contactPage"));
const ServicesPage = lazy(() => import("./pages/servicesPage/servicesPage"));

function App() {
  const [scrollUp, setScrollUp] = useState(false);
  const [arrowScrollUp, setArrowScrollUp] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
    if (window.scrollY >= 50) {
      setArrowScrollUp(true);
    } else {
      setArrowScrollUp(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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

      <Suspense fallback={<Spinner />}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contactus" component={ContactPage} />
          <Route exact path="/services/:servicesId" component={ServicesPage} />
        </Switch>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
