import axios from 'axios';
import { Dispatch } from 'redux';
import { UPDATE_APPLICANTS_DATA } from './action';
import { CHECK_APPLICANT } from '../checks/action';

export const updateApplicantsData = (jwt: string, search: string) => async (dispatch: Dispatch<any>) => {
  try {
    const response = await axios.get(`https://admin-api.entrydsm.hs.kr:80/api/applicants?name=${search}`, {
      headers: {
        Authorization: jwt
      }
    });
    dispatch({
      type: UPDATE_APPLICANTS_DATA,
      applicantsData: response.data.map((applicantData: ApplicantData) => {
        let admission = '';
        switch (applicantData.admission) {
          case 'NORMAL':
            admission = '일반';
            break;
          case 'MEISTER':
            admission = '마이스터 인재';
            break;
          case 'SOCIAL':
            admission = '사회통합';
            break;
          default: 
            admission = 'ERROR';
            break;
        }
        return {
          ...applicantData,
          admission: admission,
          isCheck: false
        }
      })
    });
    dispatch({
      type: CHECK_APPLICANT,
      checks: []
    })
  } catch (err) {
    console.log(err);
  }
}
export const requestExcel = (jwt: string) => async (dispatch: Dispatch, getState) => {
  try {
    const response = await axios.post('https://admin-api.entrydsm.hs.kr:80/api/applicants/excel', {
      users: getState().applicants.filter(applicant => applicant.is_submit).map(applicant => applicant.user_id)
    }, {
      headers: {
        Authorization: jwt
      }
    });
    const date = new Date();
    const filename = `지원자 현황 ${date.getFullYear()}년${date.getMonth() + 1}월${date.getDay()}일 ${date.getHours()}시${date.getMinutes()}분.xls`;
    const data = encodeURI(response.data);
    const link = document.createElement('a');
    link.setAttribute('href', `data:text/csv;charset=utf-8,\uFEFF${data}`);
    link.setAttribute('target', '_Blank');
    link.setAttribute('download', filename);
    link.click();
  } catch (err) {
    console.log(err);
  }
}
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
  } catch (err) {
    console.log(err);
  }
}