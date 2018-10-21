import React, { SFC } from 'react';
import { Table, TBody, Td, Tr } from './local-styled/StatisticsTable';

interface Props {

}

const ApplyStatisticsTable: SFC<Props> = props =>
  <Table> 
    <TBody>
      <Tr>
        <Td colSpan={2} rowSpan={2}>구분</Td>
        <Td colSpan={2}>지원자 수</Td>
        <Td colSpan={2}>경쟁률</Td>
      </Tr>
      <Tr>
        <Td>대전</Td>
        <Td>전국</Td>
        <Td>대전</Td>
        <Td>전국</Td>
      </Tr>
      <Tr>
        <Td rowSpan={2}>특별전형</Td>
        <Td>마이스터</Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
      <Tr>
        <Td>사회통합</Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
      <Tr>
        <Td colSpan={2}>일반</Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
      <Tr>
        <Td colSpan={2}>소계</Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
      <Tr>
        <Td colSpan={2}>일반</Td>
        <Td colSpan={2}></Td>
        <Td colSpan={2}></Td>
      </Tr>
    </TBody>
  </Table>

export default ApplyStatisticsTable;