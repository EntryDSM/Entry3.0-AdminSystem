import { REQUEST_EXAM_TABLE } from './action';

const initialState: Array<ExamTableRows> = [];

const exam = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_EXAM_TABLE:
      return action.rows;
    default:
      return state;
  }
}

export default exam;