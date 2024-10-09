import { Operand } from "../src/entities";

describe("Operand", () => {
  let operand = new Operand();

  beforeEach(() => {
    operand = new Operand();
  });

  it("should correctly operand default value", () => {
    expect(operand.textValue).toEqual("");
    expect(operand.numericValue).toEqual(0);

    operand = new Operand("0");
    expect(operand.textValue).toEqual("0");
    expect(operand.numericValue).toEqual(0);

    operand = new Operand("012345");
    expect(operand.textValue).toEqual("012345");
    expect(operand.numericValue).toEqual(12345);

    let initialValueWithInvalidValue = () => {
      operand = new Operand("NaN");
    };
    expect(initialValueWithInvalidValue).toThrow();

    initialValueWithInvalidValue = () => {
      operand = new Operand("12.2A");
    };
    expect(initialValueWithInvalidValue).toThrow();

    operand = new Operand("12.2");
    expect(operand.textValue).toEqual("12.2");
    expect(operand.numericValue).toEqual(12.2);
  });

  it("should correctly concat operand value", () => {
    operand.concat("0");
    expect(operand.textValue).toEqual("0");

    operand.concat("1");
    expect(operand.textValue).toEqual("1");

    operand.concat(".");
    operand.concat(".");
    operand.concat("0");
    operand.concat("0");
    operand.concat("2");
    expect(operand.textValue).toEqual("1.002");
    expect(operand.numericValue).toEqual(1.002);

    operand.reset();
    operand.concat("123");
    operand.concat("456");
    operand.concat("7");
    expect(operand.textValue).toEqual("147");
    expect(operand.numericValue).toEqual(147);

    operand.concat(".89");
    operand.concat("01");
    expect(operand.textValue).toEqual("147.0");
    expect(operand.numericValue).toEqual(147);

    operand.concat("51");
    expect(operand.textValue).toEqual("147.05");
    expect(operand.numericValue).toEqual(147.05);
  });

  it("should correctly operand decimal value", () => {
    operand.concat("0");
    operand.concat("0");
    operand.concat("0");
    operand.concat(".");
    operand.concat("0");
    operand.concat("0");
    operand.concat("2");
    expect(operand.textValue).toEqual("0.002");
    expect(operand.numericValue).toEqual(0.002);

    operand.reset();
    operand.concat("0");
    operand.concat("0");
    operand.concat("1");
    operand.concat("2");
    operand.concat(".");
    operand.concat(".");
    operand.concat("0");
    operand.concat("0");
    operand.concat("0");
    operand.concat("2");
    operand.concat(".");
    operand.concat("3");
    operand.concat("4");
    operand.concat("5");
    operand.concat("6");
    expect(operand.textValue).toEqual("12.00023456");
    expect(operand.numericValue).toEqual(12.00023456);

    operand = new Operand();
    operand.concat(".");
    expect(operand.textValue).toEqual("0.");
    expect(operand.numericValue).toEqual(0);
  });

  it("should correctly reset operand", () => {
    operand.concat("0");
    operand.concat("0");
    operand.concat("0");
    operand.concat(".");
    operand.concat("0");
    operand.concat("0");
    operand.concat("2");
    operand.reset();
    expect(operand.textValue).toEqual("");
    expect(operand.numericValue).toEqual(0);
  });

  it("should correctly update operand", () => {
    operand.update("323");
    expect(operand.textValue).toEqual("323");
    expect(operand.numericValue).toEqual(323);

    const updateWithInvalidValue = () => {
      operand.update("Abc");
    };
    expect(updateWithInvalidValue).toThrow();
  });
});
