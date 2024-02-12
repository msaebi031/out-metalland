export const videocallActionTypes = {
  SetVideocall: "setVideocall",
};

export const SetVideocall = (data) => (dispatch) => {
  return dispatch({
    type: videocallActionTypes.SetVideocall,
    data: data,
  });
};
