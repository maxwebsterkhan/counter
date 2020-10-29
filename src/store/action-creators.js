import { TYPE_INCREMENT, TYPE_DECREMENT } from "./action-types";

export const increment = () => ({
  type: TYPE_INCREMENT,
});

export const decrement = () => ({
  type: TYPE_DECREMENT,
});
