import React from "react";
import { Statistic } from "semantic-ui-react";
import { useSweetState } from "../store/store";

export default function CounterDisplay() {
  const [ state ] = useSweetState();

  return (
    <Statistic>
      <Statistic.Value>{state.counter}</Statistic.Value>
      <Statistic.Label>Counter</Statistic.Label>
    </Statistic>
  );
}