import axios from 'axios';
import { Dispatch } from 'redux';
import { updateApplicantsData } from './actionCreator';

export const updateApplicantsDataAsync = (jwt: string, search: string) => async (dispatch: Dispatch<UpdateApplicantsDataAction>) => {
  try {
    console.log(search);
    const response = await axios.get(`http://52.79.60.204/applicants?name=${search}`, {
      headers: {
        Authorization: jwt
      }
    });
    console.log(response);
    dispatch(updateApplicantsData(response.data.map((applicantData: ApplicantData) => {
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
    })));
  } catch (err) {
    console.log(err);
  }
}