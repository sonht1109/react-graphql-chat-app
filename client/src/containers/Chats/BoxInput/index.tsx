import React from "react";
import styled from "styled-components";
import sendIcon from "../../../assets/images/send.svg";
import theme from "../../../common/theme";
import Input from "../../../components/Input";

export default function BoxInput() {
  return (
    <SInputBox>
      <Input placeholder="Aa ..." />
      <div className="icon">
        <img src={sendIcon} alt="send" width={24} height={24} />
      </div>
    </SInputBox>
  );
}

export const SInputBox = styled.div`
  padding: 0 10px 10px;
  display: flex;
  align-items: center;
  ${Input} {
    border: 1px solid ${theme.colors.primary.gray};
  }
  .icon {
    margin-left: 10px;
    width: 24px;
    height: 24px;
  }
`;
