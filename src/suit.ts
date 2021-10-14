import { SuitId, Suit, CardColor } from "./types";

/**
 * All possible card suits indexed by their id
 */
const suits: Readonly<Record<SuitId, Suit>> = {
  [SuitId.Spade]: {
    id: SuitId.Spade,
    name: "pique",
    emojiSymbol: "♠",
    color: CardColor.Black,
  },

  [SuitId.Club]: {
    id: SuitId.Club,
    name: "trèfle",
    emojiSymbol: "♣",
    color: CardColor.Black,
  },

  [SuitId.Diamond]: {
    id: SuitId.Diamond,
    name: "carreau",
    emojiSymbol: "♦",
    color: CardColor.Red,
  },

  [SuitId.Heart]: {
    id: SuitId.Heart,
    name: "cœur",
    emojiSymbol: "♥",
    color: CardColor.Red,
  },
};

export default {
  suits,
};
