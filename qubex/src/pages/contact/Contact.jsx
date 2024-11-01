import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false); // State to manage button loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Disable button by setting loading to true

    emailjs
      .sendForm("service_xq7pcdu", "template_zmkh1mp", form.current, {
        publicKey: "74rYvvN5RarYTRAhk",
      })
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          form.current.reset(); // Reset form
          setLoading(false); // Re-enable button after success
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccessMessage("Failed to send message. Please try again.");
          setLoading(false); // Re-enable button after failure
        }
      );
  };

  return (
    <>
      <section id="contact-page">
        <div className="container">
          <div className="row gapp">
            <div className="col-lg-6 contact-pageptext col-md-6">
              <h1>WELCOME TO QUBEX IT</h1>
              <p>
                Discover how Qubex IT can help your business thrive with
                tailored web solutions and expert technical support. Contact us
                today to learn more!
              </p>

              <h5>Contact</h5>
              <p>
                <HiOutlineLocationMarker />
                <strong>Location:</strong> Dhaka, Bangladesh
              </p>
              <p>
                <a href="tel:01926072547">
                  <IoIosCall /> <strong>Phone:</strong> 01926072547
                </a>
              </p>
              <p>
                <a href="mailto:qubexit@gmail.com">
                  {" "}
                  <MdEmail /> <strong>Email:</strong>
                  qubexit@gmail.com
                </a>
              </p>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                {successMessage && (
                  <p className="alert alert-success">{successMessage}</p>
                )}
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Your Number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      rows="7"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="s">
                    <button
                      type="submit"
                      className="btnn btnn-primary send"
                      disabled={loading} // Disable button when loading
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
