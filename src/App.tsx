import { Wrapper } from 'App.styles';
import Card from 'components/Card/Card';
import React, { useState } from 'react';
import { createBoard, ICardProps } from 'utils/setup';
import { shuffleArray } from 'utils/utils';

const App = () => {
  const [cards, setCards] = useState<ICardProps[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchPairs, setMatchPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | ICardProps>(undefined);

  const handleCardClick = (currentCard: ICardProps) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === currentCard.id ? { ...card, flipped: true, clickable: false } : card,
      ),
    );

    if (!clickedCard) {
      setClickedCard({ ...currentCard });
      return;
    }

    if (clickedCard.matchingCardId === currentCard.id) {
      setMatchPairs((prev) => prev + 1);
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentCard.id
            ? { ...card, clickable: false }
            : card,
        ),
      );
      setClickedCard(undefined);
      return;
    }

    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentCard.id
            ? { ...card, flipped: false, clickable: true }
            : card,
        ),
      );
    }, 1000);
    setClickedCard(undefined);
  };
  return (
    <Wrapper>
      {cards.map((card) => (
        <Card key={card.id} card={card} callback={handleCardClick} />
      ))}
    </Wrapper>
  );
};

export default App;
