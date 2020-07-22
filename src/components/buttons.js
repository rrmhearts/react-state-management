import React from "react";
import { Button } from "semantic-ui-react";
import { useSweetState } from "../store/store";

export default function CounterButtons() {
  const [, actions ] = useSweetState();

  return (
    <div>
      <Button.Group>
        <Button color="green" onClick={actions.increment}>
          Add
        </Button>
        <Button color="red" onClick={actions.decrement}>
          Minus
        </Button>
      </Button.Group>
    </div>
  );
}