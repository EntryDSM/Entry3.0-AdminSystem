import { UPDATE_APPLICANTS_DATA, CHECK_APPLICANT } from './action';

const initialState: ApplicantsData = []

const applicants = (state = initialState, action: ApplicantsAction) => {
  switch (action.type) {
    case UPDATE_APPLICANTS_DATA:
      return {
        ...state,
        applicantsData: action.applicantsData
      }
    case CHECK_APPLICANT:
      return {
        ...state
      }
    default:
      return state
  }
}

export default applicants;