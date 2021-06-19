import { css } from "styled-components";

export const mixinFlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const mixinsScrollBar = css`
  /* width */
  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;