import { RankId, SuitId, Card } from "./types";

/**
 * The unicode "code point" of the first card for each suit
 *
 * @remarks The first cards are the Aces
 * If we know the code point of the first card in a suit, it's easy to compute those for other ranks (Two, ..., Ten, ..., King)
 *
 * To understand more about Unicode "code points":
 * @see {@link https://en.wikipedia.org/wiki/Code_point}
 */
export const suitFirstCardCodePoints: Record<SuitId, number | undefined> = {
  [SuitId.Spade]: "🂡".codePointAt(0),
  [SuitId.Club]: "🃑".codePointAt(0),
  [SuitId.Diamond]: "🃁".codePointAt(0),
  [SuitId.Heart]: "🂱".codePointAt(0),
};

/**
 * The code point "offset" for each rank
 *
 * @remarks We can add this offset to a suit's first card "code point"
 * Then we get a card emoji's code point
 * The one for the card with this suit and rank
 *
 * @see {@link suitFirstCardCodePoints}
 */
export const rankCodePointOffsets: Record<RankId, number> = {
  [RankId.Ace]: 0,
  [RankId.Two]: 1,
  [RankId.Three]: 2,
  [RankId.Four]: 3,
  [RankId.Five]: 4,
  [RankId.Six]: 5,
  [RankId.Seven]: 6,
  [RankId.Eight]: 7,
  [RankId.Nine]: 8,
  [RankId.Ten]: 9,
  [RankId.Jack]: 10,
  [RankId.Qween]: 12,
  [RankId.King]: 13,
};

/**
 * Get the emoji representing the card
 *
 * @param card The card
 * @returns The card's emoji (unicode character)
 */
function getCardEmoji(card: Card): string {
  let emoji = "";

  const suitFirstCardCodePoint = suitFirstCardCodePoints[card.suit.id];
  const rankOffset = rankCodePointOffsets[card.rank.id];

  if (suitFirstCardCodePoint != undefined) {
    const emojiCodePoint = suitFirstCardCodePoint + rankOffset;
    emoji = String.fromCodePoint(emojiCodePoint);
  }

  return emoji;
}

export default {
  getCardEmoji,
};
