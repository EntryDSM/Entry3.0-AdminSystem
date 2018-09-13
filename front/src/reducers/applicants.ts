import { UPDATE_APPLICANTS_DATA } from '../actions/applicants';
import { Action } from 'redux';

const initialState: ApplicantsData = {
  data: [
    {
      name: '',
      payment: false,
      receipt: false,
      receiptCode: '000',
      region: '전국',
      type: 'normal',
      userId: ''
    }
  ]
}

const applicants = (state = initialState, action: UpdateApplicantsDataAction) => {
  if (action.type === UPDATE_APPLICANTS_DATA) {
    return {
      ...state,
      data: action.data
    }
  } else {
    return state;
  }
}

export default applicants;