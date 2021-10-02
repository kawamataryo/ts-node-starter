import { greeting } from "../src";

it("greeting", () => {
  expect(greeting("ryo")).toBe("Hello ryo");
});
