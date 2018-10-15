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
  is_submit: boolean;
}
interface ApplicantsData extends Array<ApplicantData> {}
interface SubmitApplicantInfo {
  academic: {
    graduate_year?: number;
    is_ged?: boolean;
    school_name?: string;
    student_class?: number;
    student_grade?: number;
    student_number?: number;
  },
  basic: {
    address: string;
    name: string;
    tel: string;
  },
  exam_code: string;
  main: {
    admission: string;
    img_path: string;
    name: string;
    region: string;
  },
  parent: {
    name: string;
    tel: string;
  }
}
interface NotSubmitApplicantInfo {
  name?: string;
  email?: string;
  school?: string;
  tel?: string;
  parent_tel?: string;
}
interface AsideMode {
  mode: 'all'|'check'|'checks';
}
interface ExamTableRows {
  admission: string;
  exam_code: string;
  img_path: string;
  middle_school: string;
  name: string;
  receipt_code: string;
  region: string;
}
// Action
interface ApplicantsAction extends Action {
  applicantsData: ApplicantsData;
}
interface UpdateApplicantsDataAction extends ApplicantsAction {
  type: 'UPDATE_APPLICANTS_DATA';
}
interface CheckApplicantAction extends Action {
  type: 'CHECK_APPLICANT';
  checks: Array<string>;
}
interface CheckPaymentAction extends Action {
  type: 'CHECK_PAYMENT';
  userId: string;
}
interface ChangeModeAction extends Action {
  type: 'CHANGE_MODE';
  mode: 'all'|'check'|'checks';
}
interface ReuqestExamTableAction extends Action {
  type: 'REQUEST_EXAM_TABLE';
  rows: Array<ExamTableRows>;
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