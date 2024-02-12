export const doctorActionTypes = {
  SetDoctor: "setDoctor",
  SetInformation: "setInformation",
};

export const SetDoctor = (data) => (dispatch) => {
  return dispatch({
    type: doctorActionTypes.SetDoctor,
    data: data,
  });
};

export const SetInformation = (data, types) => (dispatch) => {
  return dispatch({
    type: doctorActionTypes.SetInformation,
    data: data,
    types,
  });
};
