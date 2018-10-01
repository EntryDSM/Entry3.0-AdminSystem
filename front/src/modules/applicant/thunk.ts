import axios from 'axios';
import { Dispatch } from 'redux';
import { getApplicantData, checkPayment } from './actionCreator';

export const getApplicantDataAsync = (jwt: string, userId: string) => async (dispatch: Dispatch<GetApplicantDataAction>) => {
  try {
    const response = await axios.get(`http://52.79.60.204/applicants/details/information/${userId}`, {
      headers: {
        Authorization: `JWT ${jwt}`
      }
    });
    const data: ApplicantData = response.data;
    dispatch(getApplicantData(data));
  } catch (err) {
    console.log(err);
  }
}

export const checkPaymentAsync = (jwt: string, userId: string) => async (dispatch: Dispatch<CheckPaymentAction>) => {
  try {
    await axios.patch(`http://52.79.60.204/applicants/details/payment/${userId}`, {
      headers: {
        Authorization: `JWT ${jwt}`
      }
    });
    dispatch(checkPayment(userId));
  } catch (err) {
    console.log(err);
  }
}