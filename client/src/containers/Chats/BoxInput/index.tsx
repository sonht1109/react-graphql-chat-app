import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import sendIcon from "../../../assets/images/send.svg";
// import imageIcon from "../../../assets/images/image.svg";
import theme from "../../../common/theme";
import Input from "../../../components/Input";
import TextareaAutosize from "react-textarea-autosize";

export default function BoxInput() {
  const { register, handleSubmit, watch, setFocus, control, reset } = useForm({
    defaultValues: {
      message: ''
    }
  });

  const watchMessage = watch("message");

  const onSubmit = (data: { message: string }) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    setFocus("message");
  }, [setFocus]);

  const canSendMessage = watchMessage && watchMessage?.trim() !== "";

  // const handleChooseFile = (e: any) => {
  //   console.log(e.target.files);
  // };

  return (
    <SInputBox onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="message"
        control={control}
        render={({ field: { ...props } }) => (
          <TextareaAutosize placeholder="Aa" className="textbox" {...props} />
        )}
      />

      {/* <label style={{ marginLeft: "10px" }}>
        <input
          onChange={handleChooseFile}
          className="file"
          type="file"
          accept="image/png, image/jpeg"
        />
        <img src={imageIcon} alt="files" width={20} height={20} />
      </label> */}

      {canSendMessage && (
        <button type="submit" className={`icon`}>
          <img src={sendIcon} alt="send" width={24} height={24} />
        </button>
      )}
    </SInputBox>
  );
}

const canSendAnimation = keyframes`
  from{
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const SInputBox = styled.form`
  padding: 10px 10px 15px;
  display: flex;
  align-items: center;
  border-top: 1px solid ${theme.colors.primary.gray};
  .icon {
    margin-left: 10px;
    width: 24px;
    height: 24px;
    transform: scale(0);
    animation: ${canSendAnimation} 0.15s ease-in-out forwards;
  }
  .textbox {
    background-color: ${theme.colors.primary.gray};
    flex-grow: 1;
    border: none;
    border-radius: 20px;
    padding: 10px 15px;
    height: 36px;
    outline: none;
    resize: none;
    font-family: ${theme.fonts['K2D']};
  }
  ${Input}{
    background-color: ${theme.colors.primary.gray};
    flex-grow: 1;
  }
  .file {
    display: none;
  }
`;
