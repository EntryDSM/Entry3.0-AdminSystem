import React, { SFC } from 'react';
import { Table, Td, Tr, TBody } from './local-styled/StatisticsTable';

interface Props {

}

const GradeStatistics: SFC<Props> = props =>
  <Table>
    <TBody>
      <Tr>
        <Td rowSpan={2}>환산점수</Td>
        <Td colSpan={3}>전국</Td>
        <Td colSpan={3}>대전</Td>
      </Tr>
      <Tr>
        <Td>일반전형</Td>
        <Td>마이스터</Td>
        <Td>사회통합</Td>
        <Td>일반전형</Td>
        <Td>마이스터</Td>
        <Td>사회통합</Td>
      </Tr>
      <Tr>
        <Td>141~150</Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
      <Tr>
        <Td>131~140</Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
      <Tr>
        <Td>121~130</Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
      <Tr>
        <Td>111~120</Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
      <Tr>
        <Td>109~110</Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
      <Tr>
        <Td>91~100</Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
      <Tr>
        <Td>81~90</Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
      <Tr>
        <Td>71~80</Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
      <Tr>
        <Td>70이하</Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
    </TBody>
  </Table>

export default GradeStatistics;