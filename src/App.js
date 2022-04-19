import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  const cards = [
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
  ];

  return (
    <div className="App">
      <Nav />
      <Main cards={cards} />
    </div>
  );
}
