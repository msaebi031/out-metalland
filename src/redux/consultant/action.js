export const consultantActionTypes = {
  SaveConsultant: "saveConsultant",
  ChangePageConsultant: "changePageConsultant",
  ChangeTop: "changeTop",
  ChangeDown: "changeDown",
  ChangeType: "changeType",
};

export const SaveAllConsultant =
  (data, clear = false) =>
  (dispatch) => {
    return dispatch({
      type: consultantActionTypes.SaveConsultant,
      data: data,
      clear,
    });
  };

export const ChangePageConsultant = (page) => (dispatch) => {
  return dispatch({
    type: consultantActionTypes.ChangePageConsultant,
    page,
  });
};

export const ChangeTop = () => (dispatch) => {
  return dispatch({
    type: consultantActionTypes.ChangeTop,
  });
};

export const ChangeDown = () => (dispatch) => {
  return dispatch({
    type: consultantActionTypes.ChangeDown,
  });
};

export const ChangeType = (data) => (dispatch) => {
  return dispatch({
    type: consultantActionTypes.ChangeType,
    data,
  });
};
