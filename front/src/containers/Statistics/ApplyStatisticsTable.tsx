import React, { SFC } from 'react';
import { Table, TBody, Td, Tr } from './local-styled/StatisticsTable';

interface Props {
  competitionRate: {
    daejeon: {
      meister: string;
      normal: string;
      social: string;
      total: string;
    },
    nationwide: {
      meister: string;
      normal: string;
      social: string;
      total: string;
    },
    total: string;
  };
  numberOfApplicants: {
    daejeon: {
      meister: number;
      normal: number;
      social: number;
      total: number;
    },
    nationwide: {
      meister: number;
      normal: number;
      social: number;
      total: number;
    },
    total: number;
  };
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
        <Td>{props.numberOfApplicants.daejeon.meister}</Td>
        <Td>{props.numberOfApplicants.nationwide.meister}</Td>
        <Td>{props.competitionRate.daejeon.meister}</Td>
        <Td>{props.competitionRate.nationwide.meister}</Td>
      </Tr>
      <Tr>
        <Td>사회통합</Td>
        <Td>{props.numberOfApplicants.daejeon.social}</Td>
        <Td>{props.numberOfApplicants.nationwide.social}</Td>
        <Td>{props.competitionRate.daejeon.social}</Td>
        <Td>{props.competitionRate.nationwide.social}</Td>
      </Tr>
      <Tr>
        <Td colSpan={2}>일반</Td>
        <Td>{props.numberOfApplicants.daejeon.normal}</Td>
        <Td>{props.numberOfApplicants.nationwide.normal}</Td>
        <Td>{props.competitionRate.daejeon.normal}</Td>
        <Td>{props.competitionRate.nationwide.normal}</Td>
      </Tr>
      <Tr>
        <Td colSpan={2}>소계</Td>
        <Td>{props.numberOfApplicants.daejeon.total}</Td>
        <Td>{props.numberOfApplicants.nationwide.total}</Td>
        <Td>{props.competitionRate.daejeon.total}</Td>
        <Td>{props.competitionRate.nationwide.total}</Td>
      </Tr>
      <Tr>
        <Td colSpan={2}>총계</Td>
        <Td colSpan={2}>{props.numberOfApplicants.daejeon.total + props.numberOfApplicants.nationwide.total}</Td>
        <Td colSpan={2}>{props.competitionRate.total}</Td>
      </Tr>
    </TBody>
  </Table>

export default ApplyStatisticsTable;