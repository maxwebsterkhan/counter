import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../store/action-creators";

export const CounterComponent = ({
  counter,
  handleIncrement,
  handleDecrement,
}) => (
  <div>
    <p>Counter: {counter}</p>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
  </div>
);

const mapStateToProps = ({ counter }) => ({
  counter,
});

const mapDispatchToProps = {
  handleIncrement: increment,
  handleDecrement: decrement,
};

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
