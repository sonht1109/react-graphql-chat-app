import styled from "styled-components";
import theme from "../../common/theme";
import Input from "../../components/Input";

export const SChatBox = styled.div`
  border-left: 1px solid ${theme.colors.primary.gray};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SLeft = styled.div`
  width: 400px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${Input} {
    border: 1px solid ${theme.colors.primary.light_gray};
  }
  .header {
    display: flex;
    align-items: center;
    padding: 10px;
    .avt {
      border-radius: 50%;
    }
    h3 {
      margin-left: auto;
      color: ${theme.colors.primary.blue};
    }
  }
`;

const SChats = styled.div`
  box-sizing: border-box;
  background-color: white;
  overflow: hidden;
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export default SChats;
