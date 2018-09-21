import axios from 'axios';

export const UPDATE_APPLICANTS_DATA = 'UPDATE_APPLICANTS_DATA';

export const updateData = (data: any) => ({
  type: UPDATE_APPLICANTS_DATA,
  data
});

export const updateDataAsync = (jwt, search) => dispatch => {
  axios.get(`http://52.79.60.204/applicants${search}`, {
    headers: {
      Authorization: `JWT ${jwt}`
    }
  }).then(res => {
    dispatch(updateData(res.data));
  }).catch(err => {
    console.log(err);
  });
}