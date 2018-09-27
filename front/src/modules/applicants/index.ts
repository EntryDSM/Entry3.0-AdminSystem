import { UPDATE_APPLICANTS_DATA, CHECK_APPLICANT } from './action';

const initialState: ApplicantsData = []

const applicants = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_APPLICANTS_DATA:
      return [
        ...action.applicantsData
      ]
    case CHECK_APPLICANT:
      return [
        ...state.map(applicant => {
          if (applicant.user_id == action.userId) {
            return { ...applicant, isCheck: !applicant.isCheck }
          } else {
            return { ...applicant }
          }
        })
      ]
    default:
      return state
  }
}

export default applicants;