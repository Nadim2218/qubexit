import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaFacebookMessenger } from "react-icons/fa";
import "./Footer.css";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <>
    <section id='footer'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer">
                    <ul className='footer-icon'>
                        <li><a href="https://wa.me/+8801926072547?text="><FaWhatsapp /></a></li>
                        <li><a href="https://www.facebook.com/share/zTaxG5r6X7MyFmHv/"><CiFacebook /></a></li>
                        <li><a href="https://m.me/452087554654034?source=qr_link_share"><FaFacebookMessenger /></a></li>
                    </ul>
                    <ul className='footer-contact'>
                        <li><a href="tel:01926072547"><IoIosCall /> +8801926072547</a></li>
                        <li><a href="mailto:qubextit@gmail.com"><MdEmail /> qubexit@gmail.com</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="copyright text-center">
                            <hr className='text-white' />
                            <p> Copyright © 2024 | QUBEX IT | All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer