import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import theme from "../../common/theme";

interface IButton extends ButtonHTMLAttributes<any> {
  color?: "white" | "blue";
  width?: string;
  height?: string
}

const buttonTheme = {
  white: {
    text: theme.colors.primary.blue,
    bgColor: "white",
  },
  blue: {
    bgColor: theme.colors.primary.blue,
    text: "white",
  },
};

const Button = styled.button<IButton>`
  display: block;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "36px"};
  font-family: ${theme.fonts.K2D};
  cursor: pointer;
  border-radius: 4px;
  color: ${(props) => buttonTheme[props.color || "blue"].text};
  font-weight: 600;
  background-color: ${(props) => buttonTheme[props.color || "blue"].bgColor};
  padding: 0 15px;
  &:disabled{
    background-color: ${theme.colors.primary.gray};
    cursor: not-allowed;
  }
`;

export default Button;
