import { Display } from "../src/entities";

describe("Display", () => {
  let display = new Display();

  beforeEach(() => {
    display = new Display();
  });
  it("should correctly display initial value", () => {
    expect(display.initialValue).toEqual("");

    display = new Display("0");
    expect(display.initialValue).toEqual("0");
    display.update("11231");
    expect(display.value).toEqual("11231");
    expect(display.initialValue).toEqual("0");

    display = new Display("NaN");
    display.update("2");
    expect(display.value).toEqual("2");
    display.reset();
    expect(display.value).toEqual("NaN");
    expect(display.initialValue).toEqual("NaN");
  });

  it("should correctly display default value", () => {
    expect(display.value).toEqual("");

    display = new Display("0");
    expect(display.value).toEqual("0");

    display = new Display("NaN");
    expect(display.value).toEqual("NaN");
  });

  it("should correctly concat display value", () => {
    display.concat("01231");
    expect(display.value).toEqual("0");

    display.concat("+123");
    expect(display.value).toEqual("0+");

    display.concat("2.123");
    expect(display.value).toEqual("0+2");

    display.concat(".123");
    display.concat("876");
    expect(display.value).toEqual("0+2.8");
  });

  it("should correctly concat between whitespace display value", () => {
    display.concatBetweenWhitespace("01231");
    expect(display.value).toEqual(" 0 ");

    display.concatBetweenWhitespace("+123");
    expect(display.value).toEqual(" 0  + ");
  });

  it("should correctly update display value", () => {
    display.update("1.123");
    expect(display.value).toEqual("1.123");

    display.update("6 + 9");
    expect(display.value).toEqual("6 + 9");

    display.update("1 + 2 = 3");
    expect(display.value).toEqual("1 + 2 = 3");

    let updateWithInvalidValue = () => {
      display.update("1.232.123");
    };
    expect(updateWithInvalidValue).toThrow(
      new Error("Existe mais de um ponto flutuante")
    );

    updateWithInvalidValue = () => {
      display.update("12+232-2");
    };
    expect(updateWithInvalidValue).toThrow(
      new Error("Existe mais de um operador aritmético")
    );
  });

  it("should correctly reset display", () => {
    const display = new Display("Display");

    display.concat("0");
    display.concat("0");
    display.concat("0");
    display.concat(".");
    display.concat("0");
    display.concat("0");
    display.concat("2");
    display.reset();
    expect(display.value).toEqual("Display");
  });
});
