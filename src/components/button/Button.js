import React from "react";

const Button = ({ children, color = "#019CD5", onClick }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "white",
        fontFamily: "Vazir",
        fontSize: "1rem",
        outline: "none",
        padding: "5px 26px",
        border: "none",
        borderRadius: 15,
        margin: "0 5px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
