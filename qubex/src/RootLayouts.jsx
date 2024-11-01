import React from "react";
import ScrollToTop from './components/ScrollToTop';
import Header from "./components/Header";
import { useLocation, Outlet } from 'react-router-dom';
import Footer from "./components/Footer";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const RootLayouts = () => {
  const location = useLocation();
  return (
    <>
     <ScrollToTop /> {/* ScrollToTop should be here to watch route changes */}
     <Header />
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        
      <Outlet />
      
     
      </CSSTransition>
    </TransitionGroup>
    <Footer />

     
      
    </>
  );
};

export default RootLayouts;
