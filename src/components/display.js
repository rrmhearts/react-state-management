import React, { useContext } from "react";
import { Statistic } from "semantic-ui-react";
import { Context } from "../context/context";

export default function CounterDisplay() {
  const { state } = useContext(Context);

  return (
    <Statistic>
      <Statistic.Value>{state.counter}</Statistic.Value>
      <Statistic.Label>Counter</Statistic.Label>
    </Statistic>
  );
}