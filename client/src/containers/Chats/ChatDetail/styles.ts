import styled from "styled-components";
import { mixinFlexCenter } from "../../../common/mixins";
import theme from "../../../common/theme";

const SChatDetail = styled.div`
  margin-left: 15px;
  border-left: 1px solid ${theme.colors.primary.gray};
  height: calc(100vh - 40px);
  min-height: 500px;
  .chat-detail_header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.primary.gray};
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;
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
  }
`;

export default SChatDetail;
