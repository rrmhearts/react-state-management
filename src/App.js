import React from "react";
import { Container, Segment, Header } from "semantic-ui-react";
import { ContextProvider } from "./context/context";

import ContactForm from "./components/form";
import ContactTable from "./components/table";
import CounterDisplay from "./components/display";
import CounterButtons from "./components/buttons";

export default function App() {
  return (
    <Container>
      <h1>React Hooks Context Demo</h1>
      <ContextProvider>
        <Segment basic>
          <Header as="h3">Contacts</Header>
          <ContactForm />
          <ContactTable />
        </Segment>
        <h3>Counter</h3>
        <Segment textAlign="center">
          <CounterDisplay />
          <CounterButtons />
        </Segment>
      </ContextProvider>
    </Container>
  );
}