import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, style }) => {
  const defaultStyle: React.CSSProperties = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
    ...style,
  };

  return (
    <button style={defaultStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
