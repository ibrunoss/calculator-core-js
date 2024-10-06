import Display from "../src/display";

describe("Display", () => {
  it("should correctly display default value", () => {
    let display = new Display("0");
    expect(display.value).toEqual("0");

    display = new Display("");
    expect(display.value).toEqual("");

    display = new Display("NaN");
    expect(display.value).toEqual("NaN");
  });

  it("should correctly concat display value", () => {
    const display = new Display("Display");

    display.concat("0");
    expect(display.value).toEqual("0");

    display.concat("1");
    expect(display.value).toEqual("1");

    display.setDecimal();
    display.setDecimal();
    display.concat("0");
    display.concat("0");
    display.concat("2");
    expect(display.value).toEqual("1.002");
  });

  it("should correctly display history", () => {
    const display: Display = new Display("Display");
    let mockHistory: string[] = [];

    display.concat("0");
    mockHistory.push("Display");
    display.concat("0");
    display.concat("0");
    display.concat("1");
    mockHistory.push("0");
    display.concat("2");
    mockHistory.push("1");
    display.concat("2");
    mockHistory.push("12");
    expect(display.history.length).toEqual(mockHistory.length);
    expect(display.history.every((v, k) => v === mockHistory[k])).toBeTruthy();

    display.backspace();
    mockHistory.pop();
    expect(display.history.length).toEqual(mockHistory.length);
    expect(display.history.every((v, k) => v === mockHistory[k])).toBeTruthy();

    display.setDecimal();
    mockHistory.push("12");
    display.concat("3");
    mockHistory.push("12.");
    display.concat("4");
    mockHistory.push("12.3");
    expect(display.history.length).toEqual(mockHistory.length);
    expect(display.history.every((v, k) => v === mockHistory[k])).toBeTruthy();

    display.reset();
    mockHistory = [];
    expect(display.history.length).toEqual(mockHistory.length);
    expect(display.history.every((v, k) => v === mockHistory[k])).toBeTruthy();
  });

  it("should correctly backspace display value", () => {
    const display = new Display("Display");

    display.concat("0");
    display.concat("0");
    display.setDecimal();
    display.concat("0");
    display.concat("0");
    display.concat("2");

    display.backspace();
    display.backspace();
    display.backspace();
    expect(display.value).toEqual("0.");

    display.backspace();
    display.backspace();
    expect(display.value).toEqual("Display");

    display.backspace();
    expect(display.value).toEqual("Display");
  });

  it("should correctly display decimal value", () => {
    let display = new Display("Display");

    display.concat("0");
    display.concat("0");
    display.concat("0");
    display.setDecimal();
    display.concat("0");
    display.concat("0");
    display.concat("2");
    expect(display.value).toEqual("0.002");

    display.reset();
    display.concat("0");
    display.concat("0");
    display.concat("1");
    display.concat("2");
    display.setDecimal();
    display.setDecimal();
    display.concat("0");
    display.concat("0");
    display.concat("0");
    display.concat("2");
    display.setDecimal();
    display.concat("3");
    display.concat("4");
    display.concat("5");
    display.concat("6");
    expect(display.value).toEqual("12.00023456");

    display = new Display("");
    display.setDecimal();
    expect(display.value).toEqual("0.");
  });
});

it("should correctly reset display", () => {
  const display = new Display("Display");

  display.concat("0");
  display.concat("0");
  display.concat("0");
  display.setDecimal();
  display.concat("0");
  display.concat("0");
  display.concat("2");
  display.reset();
  expect(display.value).toEqual("Display");
  expect(display.history.length).toEqual(0);
});
