import React from "react";

interface FeedbackMessageProps {
  message: string;
  type: "success" | "error";
  onClose?: () => void;
}

const FeedbackMessage: React.FC<FeedbackMessageProps> = ({
  message,
  type,
  onClose,
}) => {
  const style: React.CSSProperties = {
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: type === "success" ? "#e7f3e9" : "#f8d7da",
    color: type === "success" ? "#2e7d32" : "#721c24",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "20px",
  };

  return (
    <div style={style}>
      <p>{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "8px 12px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Close
        </button>
      )}
    </div>
  );
};

export default FeedbackMessage;
