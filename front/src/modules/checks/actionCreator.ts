import axios from 'axios';
import { Dispatch } from 'redux';
import { updateApplicantsData } from '../applicants/actionCreator';
import { CHECK_APPLICANT, CHECK_PAYMENT, CEHCK_RECEIPT } from './action';
import { UPDATE_APPLICANTS_DATA } from '../applicants/action';
import _ from 'lodash';

export const checkApplicant = (jwt: string, userId: string) => (dispatch: Dispatch<CheckApplicantAction|UpdateApplicantsDataAction|ChangeModeAction>, getState) => {
  if (userId === '') {
    dispatch({
      type: CHECK_APPLICANT,
      checks: []
    });
  } else {
    // UPDATE_APPLICANTS_DATA
    const applicantsData = getState().applicants.map(applicant => {
      if (applicant.user_id === userId) return { ...applicant, isCheck: !applicant.isCheck };
      return { ...applicant };
    });
    dispatch({
      type: UPDATE_APPLICANTS_DATA,
      applicantsData
    });
    // CHECK_APPLICANT
    const checks = applicantsData.filter(applicant => applicant.isCheck).map(applicant => applicant.user_id);
    dispatch({
      type: CHECK_APPLICANT,
      checks
    });
  }
}
export const checkPayment = (jwt: string, userId: string) => async (dispatch: Dispatch<any>) => {
  try {
    await axios.patch(`https://admin-api.entrydsm.hs.kr:80/api/applicants/details/payment/${userId}`, null, {
      headers: {
        Authorization: jwt
      }
    });
    dispatch(updateApplicantsData(jwt, ''));
    dispatch({
      type: CHECK_PAYMENT,
      userId
    });
  } catch (err) {
    console.log(err);
  }
}
export const checkReceipt = (jwt: string, userId: string) => async (dispatch: any) => {
  try {
    await axios.patch(`https://admin-api.entrydsm.hs.kr:80/api/applicants/details/receipt/${userId}`, null, {
      headers: {
        Authorization: jwt
      }
    });
    dispatch(updateApplicantsData(jwt, ''));
    dispatch({
      type: CEHCK_RECEIPT,
      userId
    });
  } catch (err) {
    console.log(err);
  }
}