import React from "react";

function Card(props) {
  const card = props.cardContent;

  return (
    <>
      {" "}
      <div className="content">{card.copy}</div>
      <figure>
        <img src={card.media.href} alt={card.media.alt} />
        <figcaption>{card.media.title}</figcaption>
      </figure>
      <nav className="links">
        <ul>
          {card.links.map((link, i) => (
            <li key={i}>
              <a className={link.type} href={link.href} title={link.title}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Card;
