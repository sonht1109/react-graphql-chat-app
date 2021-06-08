import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body{
    user-select: none;
    font-family: ${theme.fonts.K2D};
    overflow-x: hidden;
  }

  .toast-body{
    font-family: ${theme.fonts.K2D};
  }

  p, label, h1, h2, h3, h4, h5, h6{
    margin: 0;
  }

  button, input, select{
    border: none;
    outline: none;
  }

  .login_or_signup{
    color: ${theme.colors.primary.gray};
    text-align: right;
    a{
      color: ${theme.colors.primary.gray};
    }
  }

  .avt{
    border-radius: 50%;
  }
`;

export default GlobalStyle;
