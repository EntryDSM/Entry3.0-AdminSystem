import * as React from 'react';
import { Button } from './local-styled/ExcelRequestButton';

type Props = {
  request: Function
}

const ExcelRequestButton = ({ request }: Props) =>
  <Button onClick={() => request()}>
    전체정보 엑셀출력
  </Button>

export default ExcelRequestButton;