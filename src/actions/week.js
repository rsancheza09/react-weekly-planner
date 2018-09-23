import * as ACTIONS from '../constants/week';

export const getCurrentWeek = () => {
  return (dispatch, getState) => {
    const { currentWeek } = getState().week;
    if (!getState().week.weeks.lenght) {
      dispatch({
        type: ACTIONS.WEEK.SET_INITIAL,
        payload: {
          currentWeek,
        },
      });
    }
    const resp = getState().week.weeks.slice(-1);
    return resp[0];
  };
};
