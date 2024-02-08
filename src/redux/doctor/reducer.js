import { doctorActionTypes } from "./action";

const doctorInitialState = {
  data: [],
  category: "",
  time: "",
};

export default function reducer(state = doctorInitialState, action) {
  switch (action.type) {
    case doctorActionTypes.SetDoctor:
      return Object.assign({}, state, {
        data: action.data.data,
      });
    // set type
    case doctorActionTypes.SetInformation:
      if (action.types == "time") {
        return Object.assign({}, state, {
          time: action.data,
        });
      } else {
        return Object.assign({}, state, {
          category: action.data,
        });
      }
    default:
      return state;
  }
}
