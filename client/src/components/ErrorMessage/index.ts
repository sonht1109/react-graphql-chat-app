import styled from "styled-components";

const ErrorMessage = styled.span<{color?: string}>`
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.color || 'red'};
  display: block;
  text-align: right;
`

export default ErrorMessage;