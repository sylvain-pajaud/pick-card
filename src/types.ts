export const enum CardColor {
  Black,
  Red,
}

export const enum SuitId {
  Spade,
  Club,
  Diamond,
  Heart,
}

export const enum RankId {
  Ace,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Qween,
  King,
}

/**
 * Suit of a card
 *
 * @remarks Possible suits are: `Spades`, `Clubs`, `Diamonds`, `Hearts`
 */
export interface Suit {
  id: SuitId;
  name: string;
  emojiSymbol: string;
  color: CardColor;
}

/**
 * Rank of a card
 *
 * @remarks Example of ranks: `Ace`, `Ten`, `Qween`
 */
export interface Rank {
  id: RankId;
  value: number;
  name: string;
  shortName: string;
}

/**
 * Playing card
 */
export interface Card {
  /**
   * The card's suit
   *
   * @remarks Possible suits are: `Spades`, `Clubs`, `Diamonds`, `Hearts`
   */
  suit: Suit;

  /**
   * The card's rank
   *
   * @remarks Example of ranks: `Ace`, `Ten`, `Qween`
   */
  rank: Rank;

  /**
   * Get the emoji representing the card
   *
   * @param this The card
   * @returns The card's emoji (unicode character)
   */
  getEmoji(this: Card): string;

  /**
   * Get the emoji representing the card, formatted to be displayed in color on the standard output
   *
   * @param this The card
   * @returns The card's emoji (unicode character) with formatting characters
   */
  getColoredEmoji(this: Card): string;

  /**
   * Get the short name of the card
   *
   * @remarks Example of card's short name: `D♥` (Queen of Hearts)
   *
   * @param this The card
   * @returns The card's short name
   */
  getShortName(this: Card): string;

  /**
   * Get the short name of the card, formatted to be displayed in color on the standard output
   *
   * @remarks Example of card's short name: `D♥` (Queen of Hearts)
   *
   * @param this The card
   * @returns The card's short name
   */
  getColoredShortName(this: Card): string;

  /**
   * Get the name of the card
   *
   * @remarks Example of card's name: `Dame de cœur` (Queen of Hearts)
   *
   * @param this The card
   * @returns The card's name
   */
  getName(this: Card): string;
}

export interface CardPile {
  /**
   * Pick a random card in the pile
   *
   * @remarks This is an immutable operation
   * The original pile is not changed
   *
   * @returns
   * - The new pile (without the picked card)
   * - The picked card
   */

  pickRandomCard(): [CardPile, Card | null];

  /**
   * Pick the card on the top of the pile
   *
   * @remarks This is an immutable operation
   * The original pile is not changed
   *
   * @returns
   * - The new pile (without the picked card)
   * - The picked card
   */
  pickTopCard(): [CardPile, Card | null];

  /**
   * Put a card at the top of the pile
   *
   * @remarks This is an immutable operation
   * The original pile is not changed
   *
   * @returns The new pile (with the added card)
   */
  putCardOnTop(card: Card): CardPile;

  /**
   * Get the cards inside the pile
   *
   * @returns The pile's cards
   */
  getCards(): Card[];
}

export interface Game {
  action(): void;
}
