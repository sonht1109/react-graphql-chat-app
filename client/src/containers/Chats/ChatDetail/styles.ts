import styled, { keyframes } from "styled-components";
import theme from "../../../common/theme";

const timeTagAppear = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

const SChatDetail = styled.div`
  flex: 1;
  overflow: hidden;
  padding: 10px 0 10px 10px;
  .chat_detail-container {
    overflow-y: auto;
    width: 100%;
    height: 100%;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    .message {
      border-radius: 20px;
      padding: 10px;
      margin: 3px 0;
      width: fit-content;
      max-width: 80%;
      position: relative;
      display: inline-flex;
      align-items: center;
      &::after{
        position: absolute;
        content: unset;
        border-radius: 4px;
        padding: 5px 8px;
        color: white;
        background-color: black;
        font-size: 12px;
      }
      &.right {
        background-color: ${theme.colors.primary.blue};
        color: white;
        margin-left: auto;
        &::after {
          right: calc(100% + 5px);
        }
      }
      &.left {
        background-color: ${theme.colors.primary.light_gray};
        color: ${theme.colors.primary.text};
        &::after {
          left: calc(100% + 5px);
        }
      }
      &:hover{
        &::after{
          animation: ${timeTagAppear} 0.5s forwards;
          content: attr(data-time);
        }
      }
    }
  }
`;

export default SChatDetail;
