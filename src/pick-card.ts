import process = require("process");
import readline = require("readline");

import game from "./game";

// Emit "keypress" event each time a key is pressed
readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) {
  // Configure the standard input in raw mode
  // Then the input is available character-by-character
  process.stdin.setRawMode(true);
}

/**
 * The game which the player can interact with
 */
const cardGame = game.initGame();

console.log("Appuyez sur entrée pour tirer une carte 🃏");

/**
 * The game UI: Determine the game action based on the keyboard's key entered by the player
 *
 * @param key - The key entered by the player
 */
function playerAction(_keyStr: string, key: readline.Key) {
  if (key && key.name == "return") {
    cardGame.action();
  }
  // SIGINT
  else if (key && key.sequence == "\u0003") {
    process.kill(process.pid, "SIGINT");
  }
  // SIGTERM
  else if (key && key.sequence == "\u0004") {
    process.exit(0);
  }
}

process.stdin.on("keypress", playerAction);
