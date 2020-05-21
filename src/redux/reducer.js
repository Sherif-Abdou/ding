import { REFRESH } from "./actions";

const initialState = {
  items: [],
};

export function ding(state = initialState, action) {
  switch (action) {
    case REFRESH:
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
}
