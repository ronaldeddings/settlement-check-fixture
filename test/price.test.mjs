import assert from "node:assert/strict";
import test from "node:test";

import { parsePrice } from "../src/price.mjs";

test("preserves decimal settlement prices", () => {
  assert.equal(parsePrice("$18.75"), 18.75);
});

