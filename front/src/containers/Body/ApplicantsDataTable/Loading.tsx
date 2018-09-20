import * as React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 35px;
`

const Loading = () =>
  <LoadingWrapper>
    Loading...
  </LoadingWrapper>

export default Loading;