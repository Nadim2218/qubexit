import React, { useState } from "react";
import studytown from "../../assets/studytown.webp";
import s from "../../assets/s2.webp";
import stow from "../../assets/stow.webp";
import s1 from "../../assets/s1.webp";
import customised from "../../assets/customised.webp";
import c from "../../assets/c.webp";
import organicpdf from "../../assets/organicpdf.webp";
import organic from "../../assets/organic .webp";
import foodiespdf from "../../assets/foodies.webp";
import foodies from "../../assets/food.webp";
import rent4u from "../../assets/rent4u.webp";
import rent from "../../assets/rent.webp";
import jobentry from "../../assets/jobentry.webp";
import job from "../../assets/job.webp";
import inance from "../../assets/inance.webp";
import inan from "../../assets/inan.webp";
import hotelier from "../../assets/hotelier.webp";
import hote from "../../assets/hote.webp";
import grand from "../../assets/grand.webp";
import grandcoffee from "../../assets/grandcoffee.webp";
import gift from "../../assets/gift.webp";
import giftos from "../../assets/giftos.webp";
import energy from "../../assets/energy.webp";
import energym from "../../assets/energym.webp";
import learn from "../../assets/learn.webp";
import elearning from "../../assets/elearning.webp";
import digitf from "../../assets/digitf.webp";
import digi from "../../assets/digi.webp";
import "./Portfolio.css";

const Portfolio = () => {
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
    { href: foodiespdf, imgSrc: foodies },
    { href: rent4u, imgSrc: rent },
    { href: jobentry, imgSrc: job },
    { href: inance, imgSrc: inan },
    { href: hotelier, imgSrc: hote },
    { href: grandcoffee, imgSrc: grand },
    { href: giftos, imgSrc: gift },
    { href: energym, imgSrc: energy },
    { href: elearning, imgSrc: learn },
    { href: digitf, imgSrc: digi },
  ];

  return (
    <>
      <section id="portfolio-page">
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
    </>
  );
};

export default Portfolio;
