import styled from 'styled-components';
import gs from '../../../global-styled';

const Section = styled.section`
  width: calc(100% - 300px);
  height: 100vh;
  padding: 50px;
  float: left;
  box-sizing: border-box;
`

const OverFlowContainer = styled.div`
  height: calc(100% - 40px);
  overflow: auto;
  border: 1px solid ${gs.Color.skyBlue};
  border-top: 0;
`

const DataTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 0;
`

export { Section, OverFlowContainer, DataTable };