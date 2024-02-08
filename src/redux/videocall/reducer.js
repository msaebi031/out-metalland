import { videocallActionTypes } from "./action";

const videocallInitialState = {
  data: [],
};

export default function reducer(state = videocallInitialState, action) {
  switch (action.type) {
    case videocallActionTypes.SetVideocall:
      return Object.assign({}, state, {
        data: action.data.data,
      });
    default:
      return state;
  }
}
