import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { Context } from "../context/context";

export default function CounterButtons() {
  const { actions } = useContext(Context);

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