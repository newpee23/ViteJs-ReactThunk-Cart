import {
  FETCH_STATUS_START,
  FETCH_STATUS_END,
  FETCH_STATUS_ERROR,
} from "../actions/statusAction";

const initialState = {
  loading: false,
  error: "",
};

export function statusReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STATUS_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_STATUS_END:
      return {
        ...state,
        loading: false,
      };

    case FETCH_STATUS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
     return state;
  }
}
