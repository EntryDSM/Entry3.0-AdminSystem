import axios from 'axios';
import { REQUEST_EXAM_TABLE } from './action';
import { Dispatch } from 'redux';

export const requestExamTable = (jwt: string) => async (dispatch, getState) => {
  try {
    const response = await axios.post('https://admin-api.entrydsm.hs.kr:80/api/applicants/exam_table',
      getState().applicants.map(applicant => applicant.user_id),
      {
        headers: {
          Authorization: jwt
        }
      }
    )
    const rows = response.data;
    dispatch({
      type: REQUEST_EXAM_TABLE,
      rows
    });
  } catch (err) {
    console.log(err);
  }
}
export const issuingExaminationNumber = (jwt: string) => async (dispatch: Dispatch, getState) => {
  try {
    await axios.patch('https://admin-api.entrydsm.hs.kr:80/api/applicants/details/exam_code',
      {
        users: getState().applicants.filter(applicant => applicant.is_submit).map(applicant => applicant.user_id)
      },
      {
        headers: {
          Authorization: jwt
        }
      }
    )
  } catch (err) {
    console.log(err);
  }
}