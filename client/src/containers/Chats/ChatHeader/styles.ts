import styled from "styled-components";
import { mixinFlexCenter } from "../../../common/mixins";
import theme from "../../../common/theme";

const SChatHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.primary.gray};
  padding: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);

  .username {
    color: ${theme.colors.primary.blue};
    margin-left: 10px;
  }
  .more {
    margin-left: auto;
    cursor: pointer;
    background-color: ${theme.colors.primary.light_gray};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    ${mixinFlexCenter};
  }
`;

export default SChatHeader;