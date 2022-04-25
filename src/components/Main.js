import React from "react";
import List from "./List";

export default function Main({
  cards,
  onFormSubmit,
  onCardDelete,
  onCardMove,
}) {
  return (
    <main>
      <List
        onFormSubmit={onFormSubmit}
        onCardMove={onCardMove}
        onCardDelete={onCardDelete}
        cards={cards.filter((c) => c.list === "todo")}
        header="ToDo"
      />
      <List
        onFormSubmit={onFormSubmit}
        onCardMove={onCardMove}
        onCardDelete={onCardDelete}
        cards={cards.filter((c) => c.list === "doing")}
        header="Doing"
      />
      <List
        onFormSubmit={onFormSubmit}
        onCardMove={onCardMove}
        onCardDelete={onCardDelete}
        cards={cards.filter((c) => c.list === "done")}
        header="Done"
      />
    </main>
  );
}
