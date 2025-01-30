import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard-Bold";
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard-SemiBold";
    src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard-Medium";
    src: url('/fonts/Pretendard-Medium.woff2') format('woff2');
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "AlibabaPuHuiTi-Bold";
    src: url('/fonts/AlibabaPuHuiTi-3-85-Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "AlibabaPuHuiTi-SemiBold";
    src: url('/fonts/AlibabaPuHuiTi-3-75-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: "AlibabaPuHuiTi-Medium";
    src: url('/fonts/AlibabaPuHuiTi-3-65-Medium.woff2') format('woff2');
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "AlibabaPuHuiTi";
    src: url('/fonts/AlibabaPuHuiTi-3-55-Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
  }

    
  * {
    font-family: 'Pretendard Std Variable', 'Pretendard Std', Pretendard, Roboto, AlibabaPuHuiTi, sans-serif;
  }

    
  html[lang='zh'] body {
    font-family: 'AlibabaPuHuiTi', sans-serif;
  }
`;

export default GlobalStyle;
