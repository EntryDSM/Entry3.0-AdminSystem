import React from 'react';
import styled from 'styled-components';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';

const Table = styled.table`
  width: 100%;
  height: 100%;
  border: 1px solid rgb(160, 195, 212);
  border-collapse: collapse;
`

const DataTable = ({ datas }) =>
  <Table>
    <DataTableHeader />
    <DataTableBody datas={datas} />
  </Table>

export default DataTable;