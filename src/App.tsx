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

  const handleCardClick = () => {
    console.log('click');
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
