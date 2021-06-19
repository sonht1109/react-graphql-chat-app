import styled from "styled-components";
import theme from "../../common/theme";
import Input from "../../components/Input";

export const SChatBox = styled.div`
  border-left: 1px solid ${theme.colors.primary.gray};
`
export const SLeft = styled.div`
  height: auto;
  ${Input}{
    border: 1px solid ${theme.colors.primary.light_gray};
  }
`

const SChats = styled.div`
  height: 100%;
  max-height: 100vh;
  min-width: 768px;
  box-sizing: border-box;
  background-color: white;
  overflow: hidden;
  padding-right: 30px;
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

export default SChats;
