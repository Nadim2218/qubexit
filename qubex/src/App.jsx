
import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import RootLayouts from "./RootLayouts";
import Home from './pages/home/Home';
import Preloader from './pages/preloader/Preloader';
import Portfolio from './pages/portfolio/Portfolio';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<RootLayouts/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Route>
    </Route>
  )
);





function App() {
  useEffect(() => {
    const handleContextMenu = (e) => {
        e.preventDefault(); // Disable right-click context menu
    };

    const handleKeyDown = (e) => {
        // Disable F12 and Ctrl+Shift+I (to open Developer Tools)
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
        }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listeners on unmount
    return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
        document.removeEventListener('keydown', handleKeyDown);
    };
}, []);

  return (
    <>
    <Preloader />
    <RouterProvider router={router} />
    </>
  )
}

export default App
