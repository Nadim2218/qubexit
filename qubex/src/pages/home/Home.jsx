import React from "react";
import { useRef, useState } from "react";
import headervideo from "../../assets/headervideo.mp4";
import aboutvideo from "../../assets/aboutvideo.mp4";
import difference from "../../assets/difference.mp4";
import "./Home.css";
import webdeisgn from "../../assets/ux.png";
import webdevelopment from "../../assets/app-development.png";
import app from "../../assets/app.png";
import dedicated from "../../assets/dedicated.png";
import agile from "../../assets/agile-approach.png";
import centeric from "../../assets/people.png";
import tailored from "../../assets/idea.png";
import studytown from "../../assets/studytown.webp";
import s from "../../assets/s2.webp";
import stow from "../../assets/stow.webp";
import s1 from "../../assets/s1.webp";
import customised from "../../assets/customised.webp";
import c from "../../assets/c.webp";
import organicpdf from "../../assets/organicpdf.webp";
import organic from "../../assets/organic .webp";
// import email from "../../assets/email.png";
// import call from "../../assets/call.png";
import t1 from "../../assets/t1.webp";
import t2 from "../../assets/t2.webp";
import t4 from "../../assets/t4.webp";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Home = () => {
  const videostyle = {
    backgroundColor: "{aboutvideo}",
    padding: "20px",
    textAlign: "center",
  };

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

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  const portfolioItems = [
    { href: s, imgSrc: studytown },
    { href: s1, imgSrc: stow },
    { href: c, imgSrc: customised },
    { href: organicpdf, imgSrc: organic },
  ];

  return (
    <>
      {/* banner */}
      <section id="banner">
        <div className="banner-video">
          <video
            src={headervideo}
            className="w-100"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata" // Only load minimal metadata
            poster={t1} // Path to banner thumbnail image
            onClick={(e) => e.preventDefault()} // Prevent default click behavior
          ></video>
        </div>
      </section>
      {/* banner */}
      {/* about */}
      <section id="about">
        <div className="container">
          <div className="row gapp">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="about-img">
                <video
                  src={aboutvideo}
                  className="w-100"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={t4} // Path to about thumbnail image
                  onClick={(e) => e.preventDefault()}
                ></video>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="quality">
                <div className="q-head">
                  <h2>
                    Preparing for your success <br /> provide best{" "}
                    <span>IT solutions.</span>
                  </h2>
                  <div class="slider-container">
                    <div class="slider-line"></div>
                    <div class="slider-ball"></div>
                  </div>
                </div>
                <div className="q-text">
                  <p>
                    We’re proud to collaborate with over a hundred innovative
                    businesses, including many of the world’s leading hardware
                    companies, providing top-notch IT services to support their
                    technology needs.
                  </p>
                </div>
                <div className="details-em pt-2">
                  <div class="experience-contents">
                    <article class="d-details d-flex gap-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                      </svg>
                      <div class="d-ex">
                        <h6>1 YEAR++</h6>
                        <small class="text-light">
                          of industry experience.
                        </small>
                      </div>
                    </article>
                    <article class="d-details d-flex gap-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                      </svg>
                      <div class="d-ex">
                        <h6>Highly Skilled</h6>
                        <small class="text-light">Professional Team</small>
                      </div>
                    </article>
                    <article class="d-details d-flex gap-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                      </svg>
                      <div class="d-ex">
                        <h6>50++</h6>
                        <small class="text-light">Project Completed</small>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about */}

      {/* services */}
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="q-head s-head text-center">
                <h2>
                  SERVICES <br />
                  <span>Provide exclusive services</span>
                </h2>
                <div class="slider-container s-container">
                  <div class="slider-line s-slide"></div>
                  <div class="slider-ball s-ball"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gapp mt-4">
            <div className="col-lg-3 col-sm-6">
              <div className="service-main">
                <img src={webdeisgn} alt="Web Design" />
                <h3>Web Design</h3>
                <p>Modern, user-friendly websites tailored for businesses.</p>
                <div className="hover-content">
                  <span>
                    Qubex IT creates responsive, user-friendly websites that
                    enhance your brand’s online presence and drive engagement.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="service-main">
                <img src={webdevelopment} alt="Web Development" />
                <h3>Web Development</h3>
                <p>
                  Robust, high-performance websites with advanced functionality.
                </p>
                <div className="hover-content">
                  <span>
                    We deliver full-stack web development, providing secure
                    applications with custom backend and frontend solutions
                    tailored to your needs.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="service-main">
                <img src={app} alt="SEO Services" />
                <h3>Mobile App</h3>
                <p>Scalable mobile applications for business growth.</p>
                <div className="hover-content">
                  <span>
                    Our mobile app services focus on intuitive design and
                    seamless functionality for iOS and Android, helping you
                    engage users and grow your audience.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="service-main">
                <img src={app} alt="SEO Services" />
                <h3>Quality Assurance</h3>
                <p>Comprehensive testing for flawless performance.</p>
                <div className="hover-content">
                  <span>
                    We ensure the highest quality in software through
                    comprehensive testing processes. Our rigorous QA practices
                    guarantee reliable, bug-free products that deliver optimal
                    user experiences and meet your business standards.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services */}

      {/* difference */}
      <section id="difference">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="q-head s-head text-center">
                <h2>
                  WHY CHOOSE US? <br />
                  <span>
                    "Choose us for our expertise, innovation, and unwavering
                    support.
                  </span>
                </h2>
                <div class="slider-container s-container">
                  <div class="slider-line s-slide"></div>
                  <div class="slider-ball s-ball"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-5">
              <div className="dif-video">
                <video
                  src={difference}
                  className="w-100"
                  autoPlay
                  loop
                  muted
                  playsInline // For mobile browsers
                   poster={t2}
                  onClick={(e) => e.preventDefault()} // Prevent default click behavior
                ></video>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="d-inner d-flex gap-2">
                    <div className="d-img">
                      <img src={dedicated} alt="" />
                    </div>
                    <div className="d-text">
                      <h4>Dedicated Teams</h4>
                      <p>
                        {" "}
                        Our specialized teams focus on specific projects,
                        ensuring expertise and attention to detail in every
                        aspect of development and design.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="d-inner d-flex gap-2">
                    <div className="d-img">
                      <img src={tailored} alt="" />
                    </div>
                    <div className="d-text">
                      <h4>Tailored Solutions</h4>
                      <p>
                        {" "}
                        We provide customized web and mobile applications
                        designed specifically to meet your unique business
                        needs, ensuring optimal functionality and user
                        engagement.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="d-inner d-flex gap-2">
                    <div className="d-img">
                      <img src={centeric} alt="" />
                    </div>
                    <div className="d-text">
                      <h4>User-Centric Design</h4>
                      <p>
                        {" "}
                        Our emphasis on intuitive design and seamless user
                        experiences helps your brand connect effectively with
                        its audience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="d-inner d-flex gap-2">
                    <div className="d-img">
                      <img src={agile} alt="" />
                    </div>
                    <div className="d-text">
                      <h4>Agile Approach</h4>
                      <p>
                        {" "}
                        We adopt an agile development methodology, allowing for
                        flexibility, quick iterations, and timely delivery while
                        adapting to changing project requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="difference-main mt-4">
                <div className="d-inner d-flex gap-2">
                  <div className="d-img">
                    <img src={dedicated} alt="" />
                  </div>
                  <div className="d-text">
                    <h4>Dedicated Teams</h4>
                    <p> Our specialized teams focus on specific projects, ensuring expertise and attention to detail in every aspect of development and design.</p>
                  </div>
                </div>
                <div className="d-inner d-flex gap-2">
                  <div className="d-img">
                    <img src={tailored} alt="" />
                  </div>
                  <div className="d-text">
                    <h4>Tailored Solutions</h4>
                    <p> We provide customized web and mobile applications designed specifically to meet your unique business needs, ensuring optimal functionality and user engagement.</p>
                  </div>
                </div>
                <div className="d-inner d-flex gap-2">
                  <div className="d-img">
                    <img src={centeric} alt="" />
                  </div>
                  <div className="d-text">
                    <h4>User-Centric Design</h4>
                    <p> Our emphasis on intuitive design and seamless user experiences helps your brand connect effectively with its audience.</p>
                  </div>
                </div>
                <div className="d-inner d-flex gap-2">
                  <div className="d-img">
                    <img src={agile} alt="" />
                  </div>
                  <div className="d-text">
                    <h4>Agile Approach</h4>
                    <p> We adopt an agile development methodology, allowing for flexibility, quick iterations, and timely delivery while adapting to changing project requirements.</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* difference */}
      {/* portfolio */}
      <section id="portfolio-page-home" className="my-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="q-head s-head text-center">
                <h2>
                  PORTFOLIO <br />
                  <span>A Glimpse of Our Work</span>
                </h2>
                <div className="slider-container s-container">
                  <div className="slider-line s-slide"></div>
                  <div className="slider-ball s-ball"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gapp mt-4">
            {portfolioItems.map((item, index) => (
              <div className="col-lg-3 col-6" key={index}>
               <a
                  href={item.href}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(item.href); // Use item.href (the .webp file) in the modal
                  }}
                >
                  <div className="portfolio-img">
                    <img src={item.imgSrc} className="w-100" alt="" />
                    <div className="overlay">
                      <p>View</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="portfoliobtn text-center">
                <Link className="p-btn" to="/portfolio">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={modalImage} className="modal-image" alt="Modal Content" />
          </div>
        </div>
      )}

      {/* portfolio */}
      {/* contact us */}
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="q-head s-head text-center">
                <h2>
                  Contact Us <br />
                  <span>To know More</span>
                </h2>
                <div class="slider-container s-container">
                  <div class="slider-line s-slide"></div>
                  <div class="slider-ball s-ball"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 m-auto">
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
      {/* cotact us */}
    </>
  );
};

export default Home;
