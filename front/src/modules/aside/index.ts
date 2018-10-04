import { CHANGE_MODE } from './action';

const initialState: AsideMode = {
  mode: 'all'
}

const aside = (state: AsideMode = initialState, action: ChangeModeAction) => {
  switch (action.type) {
    case CHANGE_MODE:
      return;
    default:
      return state;
  }
}

export default aside;