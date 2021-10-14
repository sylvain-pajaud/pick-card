import { RankId, Rank } from "./types";

/**
 * All possible card ranks indexed by their id
 */
const ranks: Record<RankId, Rank> = {
  [RankId.Ace]: { id: RankId.Ace, value: 1, name: "As", shortName: "A" },
  [RankId.Two]: { id: RankId.Two, value: 2, name: "Deux", shortName: "2" },
  [RankId.Three]: { id: RankId.Three, value: 3, name: "Trois", shortName: "3" },
  [RankId.Four]: { id: RankId.Four, value: 4, name: "Quatre", shortName: "4" },
  [RankId.Five]: { id: RankId.Five, value: 5, name: "Cinq", shortName: "5" },
  [RankId.Six]: { id: RankId.Six, value: 6, name: "Six", shortName: "6" },
  [RankId.Seven]: { id: RankId.Seven, value: 7, name: "Sept", shortName: "7" },
  [RankId.Eight]: { id: RankId.Eight, value: 8, name: "Huit", shortName: "8" },
  [RankId.Nine]: { id: RankId.Nine, value: 9, name: "Neuf", shortName: "9" },
  [RankId.Ten]: { id: RankId.Ten, value: 10, name: "Dix", shortName: "10" },
  [RankId.Jack]: { id: RankId.Jack, value: 11, name: "Valet", shortName: "V" },
  [RankId.Qween]: { id: RankId.Qween, value: 12, name: "Dame", shortName: "D" },
  [RankId.King]: { id: RankId.King, value: 13, name: "Roi", shortName: "R" },
};

export default {
  ranks,
};
