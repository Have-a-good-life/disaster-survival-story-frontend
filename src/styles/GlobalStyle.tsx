import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* 기본적으로 16px = 1rem */
  html {
    font-size: 16px;
  }

  /* 작은 화면 (모바일) */
  @media (max-width: 768px) {
    html {
      font-size: 14px; /* 14px = 1rem */
    }
  }

  /* 중간 화면 (태블릿) */
  @media (min-width: 768px) and (max-width: 1024px) {
    html {
      font-size: 15px; /* 15px = 1rem */
    }
  }

  /* 큰 화면 (데스크탑) */
  @media (min-width: 1024px) {
    html {
      font-size: 16px; /* 16px = 1rem */
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
