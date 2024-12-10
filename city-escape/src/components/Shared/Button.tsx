import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  style,
  className,
}) => {
  // If you still want some default styling when no className is provided, you can keep the defaultStyle.
  // Otherwise, remove defaultStyle for a purely className-based approach.
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
    <button
      className={className}
      style={className ? style : defaultStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
