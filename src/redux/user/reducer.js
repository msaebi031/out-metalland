import { userActionTypes } from "./action";

const userInitialState = {
  data: {},
};

export default function reducer(state = userInitialState, action) {
  switch (action.type) {
    case userActionTypes.getUser:
      return {
        ...state,
        data: { ...action.data },
      };
    default:
      return state;
  }
}
