import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { Context } from "../context/context";

export default function CounterButtons() {
  const [, dispatch] = useContext(Context);

  const increment = () => {
    dispatch({
      type: 'INCREMENT_COUNTER'
    });
  };

  const decrement = () => {
    dispatch({
      type: 'DECREMENT_COUNTER'
    });
  };

  return (
    <div>
      <Button.Group>
        <Button color="green" onClick={increment}>
          Add
        </Button>
        <Button color="red" onClick={decrement}>
          Minus
        </Button>
      </Button.Group>
    </div>
  );
}