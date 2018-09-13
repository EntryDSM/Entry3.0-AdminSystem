const UPDATE_APPLICANTS_DATA = 'UPDATE_APPLICANTS_DATA';

const updateApplicantsData = (applicantsData: ApplicantsData): UpdateApplicantsDataAction =>
  ({
    type: UPDATE_APPLICANTS_DATA,
    data: applicantsData
  });

// Action
export { UPDATE_APPLICANTS_DATA };
// Action creator
export { updateApplicantsData };