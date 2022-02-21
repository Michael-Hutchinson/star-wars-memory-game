import React from 'react';
import { ICardProps } from 'utils/setup';

import { BackImg, FrontImg, Wrapper } from './Card.styles';

interface Props {
  card: ICardProps;
  callback: (card: ICardProps) => void;
}

const Card: React.FunctionComponent<Props> = ({ card, callback }) => {
  const handleClick = () => {
    if (card.clickable) callback(card);
  };
  return (
    <Wrapper onClick={handleClick}>
      <FrontImg flipped={card.flipped} src={card.frontImage} alt="card-front" />
      <BackImg flipped={card.flipped} src={card.backImage} alt="card-back" />
    </Wrapper>
  );
};

export default Card;
