import React from "react";
import styled from "styled-components";
import theme from "../../common/theme";

interface ILoading {
  size?: string
}

export default function Loading({size} : ILoading) {
  return (
    <SLoading size={size}>
      <div className="spinner" />
    </SLoading>
  );
}

const SLoading = styled.div<ILoading>`
  margin: auto;
  width: ${props => props.size || '15px'};
  height: ${props => props.size || '15px'};
  border: 4px solid #bed9ed;
  border-radius: 50%;
  position: relative;

  .spinner {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100%);
    height: calc(100%);
    border: 4px solid ${theme.colors.primary.blue};
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: 1s loading linear infinite;
  }

  @keyframes loading {
    from {
      transform: translate(-4px, -4px) rotate(0);
    }
    to {
      transform: translate(-4px, -4px) rotate(360deg);
    }
  }
`;