import styled from "styled-components";
import theme from "../../common/theme";

const Input = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 20px;
  background-color: white;
  color: ${theme.colors.primary.text};
  padding: 0 15px;
  font-family: ${theme.fonts.K2D};
  &.error{
    border-color: #e40017!important;
  }
`;

export default Input;
