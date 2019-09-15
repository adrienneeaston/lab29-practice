import React from "react";
import Card from "./card.js";

function Deck(props) {
  // console.log(props.deckContent);
  return (
    <section>
      <h2>{props.deckContent.title}</h2>{" "}
      {props.deckContent.records.map((card, idx, arr) => {
        // console.log({card}, {idx}, {arr})
        return <Card cardContent={card} key={idx} />;
      })}
    </section>
  );
}

// //functional component
// <section className="deck">
// <header>
//   <h2>{deck.title}</h2>
// </header>

export default Deck;
