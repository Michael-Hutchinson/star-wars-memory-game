import card1 from '../images/card_1.jpeg';
import card2 from '../images/card_2.jpeg';
import card3 from '../images/card_3.jpeg';
import card4 from '../images/card_4.jpeg';
import card5 from '../images/card_5.jpeg';
import card6 from '../images/card_6.jpeg';
import card7 from '../images/card_7.jpeg';
import card8 from '../images/card_8.jpeg';
import cardBack from '../images/card_back.jpeg';

export interface ICardProps {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
}

const cards: string[] = [card1, card2, card3, card4, card5, card6, card7, card8];

export const createBoard = (): ICardProps[] =>
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardBack,
    frontImage: card,
    clickable: true,
    matchingCardId:
      i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`,
  }));
