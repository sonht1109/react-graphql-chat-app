import styled from "styled-components";
import { mixinsScrollBar } from "../../../common/mixins";
import theme from "../../../common/theme";
import Input from "../../../components/Input";

const SFriends = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${Input} {
    border: 1px solid ${theme.colors.primary.gray};
    margin-bottom: 10px;
  }
  .friends-container {
    overflow-y: auto;
    ${mixinsScrollBar};
    height: 100%;
    padding: 10px;
  }
    padding-bottom: 20px;
`;

export const SFriendItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 -10px 5px;
  .message {
    position: relative;
    margin-left: 10px;
    max-width: 100%;
    overflow: hidden;
    .username {
      color: ${theme.colors.primary.blue};
    }
    .last-message {
      color: ${theme.colors.secondary.gray};
      font-size: 14px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin-top: 4px;
    }
    .created-at {
      color: ${theme.colors.secondary.gray};
      position: absolute;
      top: 0px;
      right: 0px;
      font-size: 12px;
    }
  }
  &:hover {
    background-color: ${theme.colors.primary.light_gray};
  }
`;

export default SFriends;
