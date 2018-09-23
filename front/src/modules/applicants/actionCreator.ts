import {
  UPDATE_APPLICANTS_DATA,
  CHECK_APPLICANT
} from './action';

export const updateApplicantsData = (applicantsData: ApplicantsData): UpdateApplicantsDataAction => ({
  type: UPDATE_APPLICANTS_DATA,
  applicantsData
});
export const checkApplicant = (userId: string): CheckApplicantAction => ({
  type: CHECK_APPLICANT,
  userId
});