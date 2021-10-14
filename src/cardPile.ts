import { CardPile, Card } from "./types";
import card from "./card";
import suit from "./suit";
import rank from "./rank";

/**
 * The number of possible suits
 */
export const suitsCount = Object.keys(suit.suits).length;

/**
 * The number of possible ranks
 */
export const ranksCount = Object.keys(rank.ranks).length;

/**
 * The number of cards in a standard pile
 */
export const standardPileCardsCount = suitsCount * ranksCount;

/**
 * Create a pile from a card set
 *
 * @param cards The card set
 * @returns A new pile
 */
function createPile(cards: Card[]): CardPile {
  /**
   * @private
   */
  function pickCard(position: number): [CardPile, Card | null] {
    if (position >= 0 && position < cards.length) {
      const pickedCard = cards[position];

      const newCards = [
        ...cards.slice(0, position),
        ...cards.slice(position + 1),
      ];

      return [createPile(newCards), pickedCard];
    } else {
      return [cardPile, null];
    }
  }

  /**
   * @public
   */
  const cardPile = {
    pickRandomCard(): [CardPile, Card | null] {
      if (cards.length > 0) {
        const position = Math.floor(Math.random() * cards.length);

        return pickCard(position);
      } else {
        return [cardPile, null];
      }
    },

    pickTopCard(): [CardPile, Card | null] {
      const position = cards.length - 1;

      return pickCard(position);
    },

    putCardOnTop(card: Card): CardPile {
      const newCards = [...cards, card];

      return createPile(newCards);
    },

    getCards(): Card[] {
      return cards;
    },
  };

  return cardPile;
}

/**
 * Create an ordered pack
 *
 * @remarks A pack is a complete set of cards
 * It is ordered by suit and then rank
 *
 * @returns A new pack
 */
function createPack(): CardPile {
  const pack = new Array<Card>();

  for (let suitId = 0; suitId < suitsCount; suitId++) {
    for (let rankId = 0; rankId < ranksCount; rankId++) {
      pack.push(card.createCard(suitId, rankId));
    }
  }

  return createPile(pack);
}

function createRandomPile(): CardPile {
  const pile = new Array<Card>();
  const possibleCards: number[] = [...Array(standardPileCardsCount).keys()];

  while (possibleCards.length > 0) {
    const cardIndex = Math.floor(Math.random() * possibleCards.length);
    const cardId = possibleCards[cardIndex];

    const suitId = Math.floor(cardId / ranksCount);
    const rankId = cardId % ranksCount;

    pile.push(card.createCard(suitId, rankId));
    possibleCards.splice(cardIndex, 1);
  }

  return createPile(pile);
}

export default {
  createPile,
  createPack,
  createRandomPile,
};
