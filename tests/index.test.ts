import { helloWord } from "../src/index";

describe("Test", () => {
  it("Test CI", () => {
    expect(helloWord).toEqual("Hello Word!");
  });
});
