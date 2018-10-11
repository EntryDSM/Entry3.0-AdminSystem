import { CHECK_APPLICANT } from './action';

const initialState: Array<string> = []

const checks = (state = initialState, action: CheckApplicantAction) => {
  switch (action.type) {
    case CHECK_APPLICANT:
      return action.checks;
    default:
      return state;
  }
}

export default checks;