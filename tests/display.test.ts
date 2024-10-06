import { Display, Storage } from "../src/entities";

describe("Display", () => {
  const storage = new Storage<string>();
  let display = new Display("0", storage);

  beforeEach(() => {
    storage.clear();
    display.reset();
  });

  it("should correctly display default value", () => {
    expect(display.textValue).toEqual("0");
    expect(display.numericValue).toEqual(0);

    display = new Display("", new Storage<string>());
    expect(display.textValue).toEqual("");
    expect(display.numericValue).toEqual(0);

    display = new Display("NaN", new Storage<string>());
    expect(display.textValue).toEqual("NaN");
    expect(display.numericValue).toEqual(0);
  });

  it("should correctly concat display value", () => {
    display.concat("0");
    expect(display.textValue).toEqual("0");

    display.concat("1");
    expect(display.textValue).toEqual("1");

    display.concat(".");
    display.concat(".");
    display.concat("0");
    display.concat("0");
    display.concat("2");
    expect(display.textValue).toEqual("1.002");
  });

  it("should correctly display history", () => {
    const display: Display = new Display("Display", new Storage<string>());
    let mockHistory: string[] = [];

    display.concat("0");
    display.concat("0");
    display.concat("0");
    display.concat("1");
    mockHistory.push("0");
    display.concat("2");
    mockHistory.push("1");
    display.concat("2");
    mockHistory.push("12");
    expect(display.history).toEqual(mockHistory);

    display.storage.undo();
    mockHistory.pop();
    expect(display.history).toEqual(mockHistory);

    display.concat(".");
    mockHistory.push("12");
    display.concat("3");
    mockHistory.push("12.");
    display.concat("4");
    mockHistory.push("12.3");
    expect(display.history).toEqual(mockHistory);

    display.reset();
    mockHistory = [];
    expect(display.history).toEqual(mockHistory);
  });

  it("should correctly display decimal value", () => {
    display.concat("0");
    display.concat("0");
    display.concat("0");
    display.concat(".");
    display.concat("0");
    display.concat("0");
    display.concat("2");
    expect(display.textValue).toEqual("0.002");
    expect(display.numericValue).toEqual(0.002);

    display.reset();
    display.concat("0");
    display.concat("0");
    display.concat("1");
    display.concat("2");
    display.concat(".");
    display.concat(".");
    display.concat("0");
    display.concat("0");
    display.concat("0");
    display.concat("2");
    display.concat(".");
    display.concat("3");
    display.concat("4");
    display.concat("5");
    display.concat("6");
    expect(display.textValue).toEqual("12.00023456");
    expect(display.numericValue).toEqual(12.00023456);

    display = new Display("", new Storage<string>());
    display.concat(".");
    expect(display.textValue).toEqual("0.");
    expect(display.numericValue).toEqual(0);
  });

  it("should correctly reset display", () => {
    const display = new Display("Display", new Storage<string>());

    display.concat("0");
    display.concat("0");
    display.concat("0");
    display.concat(".");
    display.concat("0");
    display.concat("0");
    display.concat("2");
    display.reset();
    expect(display.textValue).toEqual("Display");
    expect(display.numericValue).toEqual(0);
    expect(display.history.length).toEqual(0);
  });
});
