import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();  // Watch for pathname changes

  useEffect(() => {
    // Always scroll to the top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto', // You can change 'auto' to 'smooth' if you want smooth scrolling
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
