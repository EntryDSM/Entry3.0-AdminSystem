import styled from 'styled-components';
import gs from '../../../../global-styled';

export const Section = styled.div`
  width: calc(100% - 300px);
  height: 100vh;
  padding: 50px;
  float: left;
`

export const Informations = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 700px;
  min-height: 535px;
  padding: 20px;
  background-color: #f5f5f5;
  font-size: 14px;
`

export const InformationContainer = styled.div`
  width: 100%;
  margin-top: -20px;
  margin-left: 20px;
`

export const InformationHeader = styled.div`
  padding-bottom: 10px;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 400;
  border-bottom: 5px solid rgb(5, 219, 239);
`

export const Summary = styled.div`
`

export const Image = styled.img`
  width: 240px;
  height: 320px;
  border: 1px solid #000;
`

export const Name = styled.div`
  margin-top: 10px;
  font-size: 42px;
`

export const TypeAndRegion = styled.div`
  margin-top: 5px;
  font-size: 21px;
`

export const IssueButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 30px;
  background-color: ${gs.Color.skyBlue};
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`