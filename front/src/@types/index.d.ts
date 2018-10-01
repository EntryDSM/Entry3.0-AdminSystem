interface Action {
  type: string;
}
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
// Action
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
interface GetApplicantDataAction extends Action {
  type: 'GET_APPLICANT_DATA';
  applicantData: ApplicantData
}
interface CheckPaymentAction extends Action {
  type: 'CHECK_PAYMENT';
  userId: string;
}
// Event target
interface Target {
  target: HTMLInputElement;
}

// Image load
declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.jpg' {
  const value: any;
  export = value;
}