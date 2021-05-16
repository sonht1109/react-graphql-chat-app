import { mixinFlexCenter } from "./../../common/mixins";
import styled from "styled-components";
import theme from "../../common/theme";
import Button from "../../components/Button";
import Input from "../../components/Input";

const SSignup = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${theme.colors.primary.blue};
  ${mixinFlexCenter};
  padding: 20px 0;
  flex-direction: column;
  .form {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    .form_input {
      margin-bottom: 10px;
      ${Input}{
        background-color: transparent;
        border: 1px solid ${theme.colors.primary.gray};
        border-radius: 4px;
        color: ${theme.colors.primary.gray};
      }
      p {
        color: ${theme.colors.primary.gray};
        margin-bottom: 4px;
      }
    }
    ${Button} {
      width: calc(100% + 30px);
      margin-top: 20px;
    }
  }
`;

export default SSignup;
