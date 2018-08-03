import React from 'react';
import styled from 'styled-components';
import AsideSearchFilter from './AsideSearchFilter';
import AsideSearchBox from './AsideSearchBox';
import { PrimaryButton } from '../../components';

const Aside = styled.aside`
  float: left;
  width: 300px;
  height: 100vh;
  padding: 40px;
  border-right: 1px solid rgb(160, 195, 212);
  box-sizing: border-box;
`

const AsideHeader = styled.header`
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: center;
  font-size: 30px;
`

const AsideMenu = ({ conditions }) =>
  <Aside>
    <AsideHeader>지원자 검색</AsideHeader>
    <AsideSearchFilter label='우편 도착 여부' />
    <AsideSearchFilter label='결제 여부' />
    <AsideSearchBox conditions={conditions} />
    <PrimaryButton name='Excel 출력' />
  </Aside>

export default AsideMenu;