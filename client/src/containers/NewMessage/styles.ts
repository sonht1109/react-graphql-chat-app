import styled, { css } from "styled-components";
import theme from "../../common/theme";

export const SUser = styled.div<{ isLast: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  ${(props) =>
    !props.isLast &&
    css`
      border-bottom: 1px solid ${theme.colors.primary.light_gray};
    `}
  .avatar {
    border-radius: 50%;
  }
  .detail {
    margin-left: 15px;
    .username {
      color: ${theme.colors.primary.blue};
    }
  }
  &:hover {
    background-color: ${theme.colors.primary.light_gray};
  }
  .options {
    display: flex;
    margin: 5px -6px 0;
    .option-item {
      cursor: pointer;
      margin: 0 6px;
    }
  }
`;

const SNewMessSearching = styled.div`
  padding: 15px;
  .search {
    margin-top: 15px;
    display: flex;
    align-items: center;
    position: relative;
    & > input {
      background-color: ${theme.colors.primary.light_gray};
    }
    .icon {
      position: absolute;
      right: 15px;
    }
  }
  .users {
    margin-top: 20px;
  }
  .header {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export default SNewMessSearching;
