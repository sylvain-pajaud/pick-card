import cardPile from "./cardPile";
import { Game, CardPile, Card } from "./types";

/**
 * Init the game
 *
 * @returns A new game
 */
function initGame(): Game {
  // Generate a card's pile
  let gamePile = cardPile.createRandomPile();
  displayCardPile(gamePile);
  // Create an empty card where we will stack picked cards
  let gamePickedCards = cardPile.createPile([]);

  /**
   * @private
   */
  function displayCard(card: Card) {
    console.log(
      "Carte: " +
        card.getName() +
        " " +
        card.getColoredShortName() +
        " " +
        card.getColoredEmoji()
    );
  }

  /**
   * @private
   */
  function displayCardPile(cardPile: CardPile) {
    console.log(
      cardPile
        .getCards()
        .map((card) => card.getColoredEmoji())
        .join("")
    );
  }

  /**
   * @private
   */
  function pickRandomCardInPile(): Card | null {
    let pickedCard: Card | null;

    [gamePile, pickedCard] = gamePile.pickTopCard();
    if (pickedCard != null) {
      gamePickedCards = gamePickedCards.putCardOnTop(pickedCard);
    }

    return pickedCard;
  }

  /**
   * @public
   */
  const game: Game = {
    action(): void {
      const pickedCard: Card | null = pickRandomCardInPile();

      if (pickedCard != null) {
        displayCardPile(gamePickedCards);
        displayCard(pickedCard);
      } else {
        console.log("La pioche est vide !");
      }
    },
  };

  return game;
}

export default {
  initGame: initGame,
};
