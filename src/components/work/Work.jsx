import React from "react";
import WorkChild from "../child/WorkChild";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import './work.css';

const Work = () => {
  return (
    <div>
      <section
        id="work"
        style={{
          background: "#F0F1F3",
          paddingTop: "200px",
        }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 d-flex flex-column align-content-center justify-content-center">
              <h4
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: "600",
                  fontSize: "48px",
                  lineHeight: "117%",
                  color: "var(--gray-900)",
                }}
              >
                Work Process
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-family)",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "133%",
                  color: "var(--gray-500)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
              </p>
              <p 
               style={{
                fontFamily: "var(--font-family)",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "133%",
                color: "var(--gray-500)",
              }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 first" >
                  <WorkChild
                    icon={<MdOutlineSpeakerNotes />}
                    heading={"1. Research"}
                    details={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                    }
                    bgClr={"#A53DFF"}
                    txtClr={"#fff"}
                  />
                </div>
                <div className="col-lg-6">
                  <WorkChild
                    icon={<MdOutlineSpeakerNotes />}
                    heading={"1. Research"}
                    details={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                    }
                    bgClr={"#EDD8FF"}
                    txtClr={"#A53DFF"}
                  />
                </div>
                <div className="col-lg-6" >
                  <WorkChild
                    icon={<MdOutlineSpeakerNotes />}
                    heading={"1. Research"}
                    details={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                    }
                    bgClr={"#EDD8FF"}
                    txtClr={"#A53DFF"}
                  />
                </div>
                <div className="col-lg-6" >
                  <WorkChild
                    icon={<MdOutlineSpeakerNotes />}
                    heading={"1. Research"}
                    details={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                    }
                    bgClr={"#EDD8FF"}
                    txtClr={"#A53DFF"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
