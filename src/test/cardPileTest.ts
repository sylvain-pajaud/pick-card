import assert from "assert";
import cardPile from "../cardPile";

describe("cardPile", () => {
  describe("#createPack()", function () {
    it("Should contain 52 cards", function () {
      const pack = cardPile.createPack();
      assert.strictEqual(pack.getCards().length, 52);
    });
  });
});
