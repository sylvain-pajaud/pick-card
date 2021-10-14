import { Chalk, bgWhite } from "chalk";
import { CardColor } from "./types";

/**
 * Formatting characters to display text in color on the standard output
 */
const cardColorFormaters: Record<CardColor, Chalk> = {
  [CardColor.Black]: bgWhite.black,
  [CardColor.Red]: bgWhite.red,
};

export default {
  cardColorFormaters,
};
