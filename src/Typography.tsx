import React from "react";
import "./styles/font.css";

interface TypographyProps {
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ children }) => {
  return (
    <p style={{ fontFamily: "Pretendard-Bold", fontSize: "30px" }}>
      {children}
    </p>
  );
};

export default Typography;
