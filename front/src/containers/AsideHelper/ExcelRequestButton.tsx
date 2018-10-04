import React from 'react';
import { Button } from './local-styled/FuncButton';
import { CSVLink } from 'react-csv';
import axios from 'axios';

interface Props {
  request: Function;
}

const ExcelRequestButton = ({ request }: Props) => {
  let data = '';
  return (
    <Button onClick={() => request()}>
      전체 지원자 정보(Excel) 다운로드
    </Button>
  );
}

export default ExcelRequestButton;