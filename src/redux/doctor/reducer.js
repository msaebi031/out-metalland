import { doctorActionTypes } from "./action";

const doctorInitialState = {
  data: [],
  category: "",
  time: "",
  times: {},
};

export default function reducer(state = doctorInitialState, action) {
  switch (action.type) {
    case doctorActionTypes.SetDoctor:
      return Object.assign({}, state, {
        data: action.data.data,
      });
    // set type
    case doctorActionTypes.SetInformation:
      switch (action.types) {
        case "time":
          return Object.assign({}, state, {
            time: action.data,
          });
        case "category":
          return Object.assign({}, state, {
            category: action.data,
          });
        case "times":
          return Object.assign({}, state, {
            times: action.data,
          });
      }
    default:
      return state;
  }
}
