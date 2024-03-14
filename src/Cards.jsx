import { useState } from "react";
// import Button from "./Button";

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const cardImages = [
    { src: "./assets/images/bat.jpg" },
    { src: "./assets/images/cat.jpg" },
    { src: "./assets/images/elephant.jpg" },
    { src: "./assets/images/giraffe.jpg" },
    { src: "./assets/images/kangaroo.jpg" },
    { src: "./assets/images/mouse.jpg" },
  ];

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffleCards);
    setTurns(0);
  };

  return shuffleCards;
}
