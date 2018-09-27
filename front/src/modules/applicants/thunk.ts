import axios from 'axios';
import { Dispatch } from 'redux';
import {
  updateApplicantsData
} from './actionCreator';

export const updateApplicantsDataAsync = (jwt: string, search: string) => (dispatch: Dispatch<UpdateApplicantsDataAction>) => {
  axios.get(`http://52.79.60.204/applicants${search}`, {
    headers: {
      Authorization: `JWT ${jwt}`
    }
  }).then(res => {
    dispatch(updateApplicantsData(res.data.map((applicantData: ApplicantData) => ({
      ...applicantData,
      isCheck: false
    }))));
  }).catch(err => {
    console.log(err);
  });
}