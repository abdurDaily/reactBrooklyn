import React, { useEffect } from "react";
import "./Banner.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Counter from "./Counter";
import AboutContaint from "../about/AboutContaint";

const Banner = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      // once: false, // Allow animations to trigger multiple times
      // offset: 200, // Trigger animations when 200px from the viewport
    });
  }, []);

  return (
    <div>
      <section id="banner">
        <div className="container">
          <div className="circile-first"></div>
          <div className="row justify-content-between pt-5">
            <div className="col-lg-6 bannerContais" data-aos="fade-right">
              <h4 className="head">Hello, I’m Brooklyn Gilbert</h4>
              <p>
                I'm a Freelance UI/UX Designer and Developer based in London,
                England. I strive to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </p>
              <div className="button">
                <a href="">Say Hello!</a>
              </div>

              <div className="row experience">
                <div className="experience_box col-lg-4" data-aos="fade-up">
                  <div>
                    <h4 className="counterHeading justify-content-center" style={{ display: "flex" }}>
                      <Counter contValue={15} />
                      &nbsp;Y.
                    </h4>
                    <span>Experience</span>
                  </div>
                </div>
                <div className="experience_box col-lg-4" data-aos="fade-up" data-aos-delay="200">
                  <div>
                    <h4 className="counterHeading justify-content-center" style={{ display: "flex" }}>
                      <Counter contValue={250} />
                      &nbsp;+
                    </h4>
                    <span>Project Completed</span>
                  </div>
                </div>
                <div className="experience_box col-lg-4" data-aos="fade-up" data-aos-delay="400">
                  <div>
                    <h4 className="counterHeading justify-content-center" style={{ display: "flex" }}>
                      <Counter contValue={58} />
                      &nbsp;
                    </h4>
                    <span>Happy Client</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 droshadow pt-md-5 pt-lg-0 text-center" data-aos="zoom-in">
              <img className="img-fluid" src="images/banner.png" alt="" />
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Banner;