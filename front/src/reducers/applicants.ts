import { UPDATE_APPLICANTS_DATA } from '../modules/applicants';

const initialState: ApplicantsData = {
  applicantsData: [
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

const applicants = (state = initialState, action: any) => {
  if (action.type === UPDATE_APPLICANTS_DATA) {
    return {
      ...state,
      applicantsData: action.data
    }
  } else {
    return state;
  }
}

export default applicants;