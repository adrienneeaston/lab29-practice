import React from "react";
import Deck from "./deck.js";
import Card from "./card.js";

const Page = props => {
  const content = props.content || [];

  return (
    <>
      {content.map((deck, i) => (
        <Deck deckContent={deck} key={i} />
      ))}
    </>
  );
};

export default Page;

// {deck.records.map(card => (
//   <div>
//     <Card cardContent={cards}/>
//   </div>
// ))}
// ))}
