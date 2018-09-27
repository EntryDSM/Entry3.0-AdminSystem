import React from 'react';
import { Button } from './local-styled/ExcelRequestButton';
import { CSVDownload } from 'react-csv';

interface Props {
  request: Function;
  csvData: string;
}

const ExcelRequestButton = ({ request, csvData }: Props) =>
  <Button onClick={() => request()}>
    전체정보 엑셀출력
    {csvData.length > 0 ? <CSVDownload data={csvData} /> : ''}
  </Button>

export default ExcelRequestButton;