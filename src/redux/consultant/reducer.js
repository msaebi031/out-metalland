import { consultantActionTypes } from "./action";

const consultantInitialState = {
  data: [],
  count: 0,
  page: 2,
  position: "top",
  type: false,
};

export default function reducer(state = consultantInitialState, action) {
  switch (action.type) {
    case consultantActionTypes.SaveConsultant:
      return Object.assign({}, state, {
        data: !action.clear ? [...state.data, ...action.data.data] : action.data.data,
        count: action.data.count,
      });
    // change page
    case consultantActionTypes.ChangePageConsultant:
      return Object.assign({}, state, {
        page: action.page,
      });
    // change top
    case consultantActionTypes.ChangeTop:
      return Object.assign({}, state, {
        data: state.position == "top" ? data : state.data.reverse(),
        position: "top",
      });
    // change down
    case consultantActionTypes.ChangeDown:
      return Object.assign({}, state, {
        data: state.position == "down" ? data : state.data.reverse(),
        position: "down",
      });
    // change type
    case consultantActionTypes.ChangeType:
      return Object.assign({}, state, {
        type: action.data,
      });
    default:
      return state;
  }
}
