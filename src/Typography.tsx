import React from "react";
// import "./styles/font.css";
import GlobalStyle from "./global.styles";
import styled from "styled-components";

interface TypographyProps {
  children: React.ReactNode;
}

const Typo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 20px;
`;

const Typography: React.FC<TypographyProps> = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Typo>{children}</Typo>
      {/* <p style={{ fontFamily: "'Pretendard-Bold'", fontSize: "30px" }}>
        {children}
      </p> */}
    </div>
  );
};

export default Typography;
