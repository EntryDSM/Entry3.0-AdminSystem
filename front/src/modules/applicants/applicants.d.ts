interface ApplicantData {
  name: string;
  isPayment: boolean;
  isReceipt: boolean;
  admission: string;
  receiptCode: string;
  region: string;
  userId?: string;
  user_id?: string;
  isCheck?: boolean;
}
interface ApplicantsData extends Array<ApplicantData> {}
interface ApplicantsAction extends Action {
  applicantsData: ApplicantsData;
}
interface UpdateApplicantsDataAction extends ApplicantsAction {
  type: 'UPDATE_APPLICANTS_DATA';
}
interface CheckApplicantAction extends Action {
  type: 'CHECK_APPLICANT';
  userId: string;
}