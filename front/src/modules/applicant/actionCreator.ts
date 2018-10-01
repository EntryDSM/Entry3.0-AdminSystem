import { GET_APPLICANT_DATA, CHECK_PAYMENT } from './action';

export const getApplicantData = (applicantData: ApplicantData): GetApplicantDataAction => ({
  type: GET_APPLICANT_DATA,
  applicantData: applicantData
});

export const checkPayment = (userId: string): CheckPaymentAction => ({
  type: CHECK_PAYMENT,
  userId: userId
});