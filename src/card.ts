import { SuitId, RankId, Card } from "./types";
import unicode from "./unicode";
import suit from "./suit";
import rank from "./rank";
import consoleFormater from "./consoleFormater";

/**
 * Create a card based on the paraneters
 *
 * @param suitId The suit id of the card
 * @param rankId The rank id of the card
 * @returns A new card conforming the specified in parameters
 */
function createCard(suitId: SuitId, rankId: RankId): Card {
  const cardSuit = suit.suits[suitId];
  const cardRank = rank.ranks[rankId];
  const colorFormater = consoleFormater.cardColorFormaters[cardSuit.color];

  return {
    suit: cardSuit,

    rank: cardRank,

    getEmoji(this: Card): string {
      return unicode.getCardEmoji(this);
    },

    getColoredEmoji(this: Card): string {
      return colorFormater(this.getEmoji());
    },

    getShortName(this: Card): string {
      return this.rank.shortName + this.suit.emojiSymbol;
    },

    getColoredShortName(this: Card): string {
      return colorFormater(this.getShortName());
    },

    getName(this: Card): string {
      return this.rank.name + " de " + this.suit.name;
    },
  };
}

export default {
  createCard,
};
