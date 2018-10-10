import { CHANGE_MODE } from './action';

export const changeMode = (mode: 'all'|'applicants'|'applicant'): ChangeModeAction => ({
  type: CHANGE_MODE,
  mode
});