import React from "react";
import "./About.css";
import aboutvideopage from "../../assets/aboutvideopage.mp4";
import t3 from "../../assets/t3.webp";

const About = () => {
  return (
    <>
      <section id="about-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-page-video">
                <video
                  src={aboutvideopage}
                  className="w-100"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={t3} // Path to about-page thumbnail image
                  onClick={(e) => e.preventDefault()}
                ></video>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-page-text">
                <p>
                  At Qubex IT, we specialize in delivering high-quality web
                  development and mobile app solutions tailored to your business
                  needs. Our team of experts is dedicated to creating
                  innovative, user-friendly websites and apps that help
                  businesses grow and succeed in the digital age. From concept
                  to launch, we provide comprehensive support and cutting-edge
                  technologies to ensure your project is delivered on time,
                  within budget, and to the highest standards. Let Qubex IT be
                  your trusted partner in building a strong online presence and
                  enhancing your digital capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="goal">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="q-head s-head text-center">
                <h2>
                  OUR GOAL <br />
                  <span>Our Mission & Vision</span>
                </h2>
                <div class="slider-container s-container">
                  <div class="slider-line s-slide"></div>
                  <div class="slider-ball s-ball"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="goal-text text-center">
                <p>
                  At Qubex IT, our ultimate goal is to empower businesses by
                  delivering cutting-edge digital solutions that foster growth,
                  efficiency, and long-term success. We are committed to
                  providing innovative and tailored web development and mobile
                  app services that not only enhance the user experience but
                  also streamline operations and boost overall productivity. By
                  building strong and impactful online presences, we help
                  businesses stand out in the competitive digital landscape.
                </p>
                <p>
                  Our mission goes beyond just meeting immediate project needs;
                  we aim to form lasting partnerships with our clients by
                  continuously staying at the forefront of technological
                  advancements. This allows us to adapt and provide relevant
                  solutions that evolve with the ever-changing digital world. We
                  are dedicated to improving our expertise and refining our
                  services to ensure that we consistently deliver the highest
                  quality of work, helping our clients achieve their strategic
                  goals, drive growth, and secure their success in the digital
                  era. At Qubex IT, we believe that by empowering businesses
                  through technology, we help shape the future of their success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
