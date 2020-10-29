import { TYPE_INCREMENT, TYPE_DECREMENT } from "./action-types";

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case TYPE_DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
