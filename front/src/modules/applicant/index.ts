import { GET_APPLICANT_DATA, CHECK_PAYMENT } from './action';

const initialState: ApplicantData = {
  name: '',
  isPayment: false,
  isReceipt: false,
  admission: '',
  receiptCode: '',
  region: '',
  userId: ''
}

const applicant = (state: ApplicantData = initialState, action: GetApplicantDataAction & CheckApplicantAction) => {
  switch (action.type) {
    case GET_APPLICANT_DATA:
      return {
        ...state,
        ...action.applicantData
      }
    case CHECK_PAYMENT:
      return {
        ...state,
        isPayment: !state.isPayment
      }
    default:
      return state;
  }
}

export default applicant;