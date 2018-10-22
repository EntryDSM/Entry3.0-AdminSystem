import React, { SFC } from 'react';
import { Table, Td, Tr, TBody } from './local-styled/StatisticsTable';

interface Props {
  onScore: {
    daejeon: {
      meister: {
        '100u': number;
        '110u': number;
        '120u': number;
        '130u': number;
        '140u': number;
        '150u': number;
        '70u': number;
        '80u': number;
        '90u': number;
      },
      normal: {
        '100u': number;
        '110u': number;
        '120u': number;
        '130u': number;
        '140u': number;
        '150u': number;
        '70u': number;
        '80u': number;
        '90u': number;
      },
      social: {
        '100u': number;
        '110u': number;
        '120u': number;
        '130u': number;
        '140u': number;
        '150u': number;
        '70u': number;
        '80u': number;
        '90u': number;
      }
    },
    nationwide: {
      meister: {
        '100u': number;
        '110u': number;
        '120u': number;
        '130u': number;
        '140u': number;
        '150u': number;
        '70u': number;
        '80u': number;
        '90u': number;
      },
      normal: {
        '100u': number;
        '110u': number;
        '120u': number;
        '130u': number;
        '140u': number;
        '150u': number;
        '70u': number;
        '80u': number;
        '90u': number;
      },
      social: {
        '100u': number;
        '110u': number;
        '120u': number;
        '130u': number;
        '140u': number;
        '150u': number;
        '70u': number;
        '80u': number;
        '90u': number;
      }
    }
  };
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
        <Td>{props.onScore.nationwide.normal['150u']}</Td>
        <Td>{props.onScore.nationwide.meister['150u']}</Td>
        <Td>{props.onScore.nationwide.social['150u']}</Td>
        <Td>{props.onScore.daejeon.normal['150u']}</Td>
        <Td>{props.onScore.daejeon.meister['150u']}</Td>
        <Td>{props.onScore.daejeon.social['150u']}</Td>
      </Tr>
      <Tr>
        <Td>131~140</Td>
        <Td>{props.onScore.nationwide.normal['140u']}</Td>
        <Td>{props.onScore.nationwide.meister['140u']}</Td>
        <Td>{props.onScore.nationwide.social['140u']}</Td>
        <Td>{props.onScore.daejeon.normal['140u']}</Td>
        <Td>{props.onScore.daejeon.meister['140u']}</Td>
        <Td>{props.onScore.daejeon.social['140u']}</Td>
      </Tr>
      <Tr>
        <Td>121~130</Td>
        <Td>{props.onScore.nationwide.normal['130u']}</Td>
        <Td>{props.onScore.nationwide.meister['130u']}</Td>
        <Td>{props.onScore.nationwide.social['130u']}</Td>
        <Td>{props.onScore.daejeon.normal['130u']}</Td>
        <Td>{props.onScore.daejeon.meister['130u']}</Td>
        <Td>{props.onScore.daejeon.social['130u']}</Td>
      </Tr>
      <Tr>
        <Td>111~120</Td>
        <Td>{props.onScore.nationwide.normal['120u']}</Td>
        <Td>{props.onScore.nationwide.meister['120u']}</Td>
        <Td>{props.onScore.nationwide.social['120u']}</Td>
        <Td>{props.onScore.daejeon.normal['120u']}</Td>
        <Td>{props.onScore.daejeon.meister['120u']}</Td>
        <Td>{props.onScore.daejeon.social['120u']}</Td>
      </Tr>
      <Tr>
        <Td>109~110</Td>
        <Td>{props.onScore.nationwide.normal['110u']}</Td>
        <Td>{props.onScore.nationwide.meister['110u']}</Td>
        <Td>{props.onScore.nationwide.social['110u']}</Td>
        <Td>{props.onScore.daejeon.normal['110u']}</Td>
        <Td>{props.onScore.daejeon.meister['110u']}</Td>
        <Td>{props.onScore.daejeon.social['110u']}</Td>
      </Tr>
      <Tr>
        <Td>91~100</Td>
        <Td>{props.onScore.nationwide.normal['100u']}</Td>
        <Td>{props.onScore.nationwide.meister['100u']}</Td>
        <Td>{props.onScore.nationwide.social['100u']}</Td>
        <Td>{props.onScore.daejeon.normal['100u']}</Td>
        <Td>{props.onScore.daejeon.meister['100u']}</Td>
        <Td>{props.onScore.daejeon.social['100u']}</Td>
      </Tr>
      <Tr>
        <Td>81~90</Td>
        <Td>{props.onScore.nationwide.normal['90u']}</Td>
        <Td>{props.onScore.nationwide.meister['90u']}</Td>
        <Td>{props.onScore.nationwide.social['90u']}</Td>
        <Td>{props.onScore.daejeon.normal['90u']}</Td>
        <Td>{props.onScore.daejeon.meister['90u']}</Td>
        <Td>{props.onScore.daejeon.social['90u']}</Td>
      </Tr>
      <Tr>
        <Td>71~80</Td>
        <Td>{props.onScore.nationwide.normal['80u']}</Td>
        <Td>{props.onScore.nationwide.meister['80u']}</Td>
        <Td>{props.onScore.nationwide.social['80u']}</Td>
        <Td>{props.onScore.daejeon.normal['80u']}</Td>
        <Td>{props.onScore.daejeon.meister['80u']}</Td>
        <Td>{props.onScore.daejeon.social['80u']}</Td>
      </Tr>
      <Tr>
        <Td>70이하</Td>
        <Td>{props.onScore.nationwide.normal['70u']}</Td>
        <Td>{props.onScore.nationwide.meister['70u']}</Td>
        <Td>{props.onScore.nationwide.social['70u']}</Td>
        <Td>{props.onScore.daejeon.normal['70u']}</Td>
        <Td>{props.onScore.daejeon.meister['70u']}</Td>
        <Td>{props.onScore.daejeon.social['70u']}</Td>
      </Tr>
    </TBody>
  </Table>

export default GradeStatistics;