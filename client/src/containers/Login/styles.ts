import { mixinFlexCenter } from "./../../common/mixins";
import styled from "styled-components";
import theme from "../../common/theme";
import Button from "../../components/Button";
import Input from "../../components/Input";

const SLogin = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${theme.colors.primary.blue};
  ${mixinFlexCenter};
  padding: 20px 0;
  flex-direction: column;
  .form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    .form_input {
      margin-bottom: 10px;
      ${Input} {
        width: calc(100% - 30px);
        background-color: transparent;
        border-radius: 4px;
        color: ${theme.colors.primary.gray};
      }
      p {
        color: ${theme.colors.primary.gray};
        margin-bottom: 4px;
      }
    }
    ${Button} {
      width: calc(100%);
      margin-top: 20px;
    }
  }
`;

export default SLogin;
