import axios from 'axios';
import { Dispatch } from 'redux';
import { UPDATE_APPLICANTS_DATA, CHECK_APPLICANT } from './action';

export const checkApplicant = (userId: string): CheckApplicantAction => ({
  type: CHECK_APPLICANT,
  userId
});
export const updateApplicantsData = (jwt: string, search: string) => async (dispatch: Dispatch<UpdateApplicantsDataAction>) => {
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
  } catch (err) {
    console.log(err);
  }
}