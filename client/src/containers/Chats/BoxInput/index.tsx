import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import sendIcon from "../../../assets/images/send.svg";
import theme from "../../../common/theme";
import Input from "../../../components/Input";

export default function BoxInput() {
  const { register, handleSubmit, watch, setFocus } = useForm();

  const watchMessage = watch("message");

  const onSubmit = (data: { message: string }) => {
    console.log(data, typeof watchMessage);
  };

  useEffect(() => {
    setFocus('message')
  }, [setFocus])

  return (
    <SInputBox onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Aa ..." {...register("message", {
        validate: value => value.trim() !== '' || ''
      })} />
      <button
        type="submit"
        className={`icon ${watchMessage && watchMessage?.trim() !== "" && 'show'}`}
      >
        <img src={sendIcon} alt="send" width={24} height={24} />
      </button>
    </SInputBox>
  );
}

export const SInputBox = styled.form`
  padding: 10px 10px 15px;
  display: flex;
  align-items: center;
  border-top: 1px solid ${theme.colors.primary.gray};
  .icon {
    margin-left: 10px;
    width: 24px;
    height: 24px;
    transform: scale(0) rotate(-30deg);
    transition: 0.15s ease-out;
    &.show{
      transform: scale(1) rotate(0deg);
    }
  }
  ${Input} {
    background-color: ${theme.colors.primary.gray};
    flex-grow: 1;
  }
`;
