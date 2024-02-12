export const userActionTypes = {
  getUser: "getUser",
};

export const serverGetuser = (data) => (dispatch) => {
  return dispatch({
    type: userActionTypes.getUser,
    data: data,
  });
};
