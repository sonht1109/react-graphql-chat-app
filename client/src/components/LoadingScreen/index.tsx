import React from 'react'
import styled from 'styled-components'
import { mixinsFlexCenter } from '../../utils/mixins';
import Loading from '../Loading';

export default function LoadingScreen() {
  return (
    <SLoadingScreen>
      <Loading size='40px' />
    </SLoadingScreen>
  )
}

const SLoadingScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  ${mixinsFlexCenter};
`;