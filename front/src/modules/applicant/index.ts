import { GET_APPLICANT_DATA, CHECK_PAYMENT } from './action';

const initialState: ApplicantInfo = {
  academic: {
    graduate_year: 0,
    is_ged: false,
    school_name: '',
    student_class: 0,
    student_grade: 0,
    student_number: 0
  },
  basic: {
    address: '',
    name: '',
    tel: ''
  },
  exam_code: '',
  main: {
    admission: '',
    img_path: '',
    name: '',
    region: ''
  },
  parent: {
    name: '',
    tel: ''
  }
}

const applicant = (state: ApplicantInfo = initialState, action: GetApplicantDataAction & CheckApplicantAction) => {
  switch (action.type) {
    case GET_APPLICANT_DATA:
      return {
        ...state,
        ...action.applicantData
      }
    default:
      return state;
  }
}

export default applicant;