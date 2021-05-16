import styled from "styled-components";
import { mixinFlexCenter } from "../../common/mixins";
import theme from "../../common/theme";

const SHome = styled.div`
  width: 100vw;
  height: 100vh;
  ${mixinFlexCenter};
  flex-direction: column;
  background-color: ${theme.colors.primary.blue};
  .logo{
    svg{
      margin: 0 20px;
    }
  }
  p{
    color: white;
    margin: 20px 0 40px;
  }
`

export default SHome