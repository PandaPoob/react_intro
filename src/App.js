import React, { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  const [cards, setCards] = useState([
    {
      title: "Make it dynamic",
      list: "todo",
      added: 1588055091061,
      id: 1,
      color: "lightpink",
      assignedTo: ["fs"],
    },
    {
      title: "Make it dynamic",
      list: "todo",
      added: 1588055091061,
      id: 2,
      color: "lightgreen",
      assignedTo: ["fs", "ff"],
    },
  ]);

  function onFormSubmit(data) {
    console.log("form submitted", data);
    setCards(
      cards.concat({
        title: "OMG, did that just happen?",
        list: "todo",
        added: Date.now(),
        id: Math.random(),
        color: "lightpink",
        assignedTo: ["fs"],
      })
    );
  }

  function onCardMove(id, whereTo) {
    console.log(id, whereTo);
    const nextCards = cards.map((card) => {
      if (card.id === id) {
        card.list = whereTo;
      }
      return card;
    });
    setCards(nextCards);
  }

  function onCardDelete(id) {
    //console.log(id);
    const nextCards = cards.filter((card) => card.id !== id);
    setCards(nextCards);
  }

  return (
    <div className="App">
      <Nav />
      {/*       <button
        onClick={() =>
          setCards(
            cards.concat({
              title: "OMG, did that just happen?",
              list: "todo",
              added: Date.now(),
              id: Math.random(),
              color: "lightpink",
              assignedTo: ["fs"],
            })
          )
        }
      >
        Awesome
      </button> */}
      <Main
        onCardMove={onCardMove}
        onCardDelete={onCardDelete}
        onFormSubmit={onFormSubmit}
        cards={cards}
      />
    </div>
  );
}
