import styled from "styled-components";
import theme from "../../common/theme";

const SChats = styled.div`
  padding: 20px;
  height: calc(100vh - 40px);
  min-height: 500px;
  box-sizing: border-box;
  background-color: white;
  overflow: hidden;
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
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
