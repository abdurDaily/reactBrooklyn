import React from "react";
import Btn from "../btn/btn";
import "./style.css";

const AboutContaint = () => {
  return (
    <div>
      <section id="about" style={{ 
        transform:'translateY(20%)',
        position: 'relative',
        zIndex: 1,
    
         }}>
        <div
          className="container p-5"
          style={{
            boxShadow: "0 36px 105px 0 rgba(43, 56, 76, 0.1)",
            background: "var(--gray-white)",
            zIndex:10,
            position:'relative'
          }}
        >
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img className="img-fluid" src="images/about.png" alt="" />
            </div>
            <div className="col-md-6"
              style={{ 
                display:"flex",
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent:'center',
                paddingLeft:'50px'
               }}
            >
              <h4>I am Professional User Experience Designer</h4>
              <p>
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences.
              </p>

              <p>
                I design and develop services for customers specializing
                creating stylish, modern websites, web services.
              </p>

             <div className="d-flex">
             <Btn
                btnText={"#fff"}
                btnBg={"#A53DFF"}
                btnContain={"My Project"}
                marginRight={'10px'}
              />
             <Btn
                btnText={"#fff"}
                btnBg={"#A53DFF"}
                btnContain={"Download CV"}
              />
             </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContaint;
