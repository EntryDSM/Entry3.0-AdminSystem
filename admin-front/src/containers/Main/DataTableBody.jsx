import React from 'react';
import styled from 'styled-components';
import DataTableRow from './DataTableRow';

const TableBodyWrapper = styled.tbody`
  display: block;
  height: calc(100% - 50px);
  overflow: scroll;
`

const DataTableBody = ({ datas }) =>
  <TableBodyWrapper>
    {
      datas.map((data, index) => <DataTableRow key={`DATA_${index}`} data={data} />)
    }
  </TableBodyWrapper>

export default DataTableBody;