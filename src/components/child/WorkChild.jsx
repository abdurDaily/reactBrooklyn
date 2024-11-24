import React from "react";

const WorkChild = ({ icon, heading, details, bgClr, txtClr }) => {
  return (
    <div>
      <div
        className="card"
        style={{
          boxShadow: "32px 32px 124px 0 rgba(43, 56, 76, 0.1)",
          background: "#FFF",
          border: "none",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <div className="icons">
          <span
            style={{
              display: "inline-block",
              background: bgClr,
              color: txtClr,
              borderRadius: "6px",
              fontSize: "25px",
              padding: "3px 10px ",
            }}
          >
            {icon}
          </span>
        </div>
        <h4
          style={{
            fontFamily: "var(--font-family)",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "120%",
            color: "var(--gray-900)",
            marginTop: "20px",
          }}
        >
          {heading}
        </h4>
        <p
          style={{
            fontFamily: "var(--font-family)",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "150%",
            color: "var(--gray-600)",
          }}
        >
          {details}
        </p>
      </div>
    </div>
  );
};

export default WorkChild;
