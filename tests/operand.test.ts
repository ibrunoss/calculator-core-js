import { Operand, Storage } from "../src/entities";

describe("Operand", () => {
  const storage = new Storage<string>();
  let operand = new Operand(storage, "0");

  beforeEach(() => {
    storage.clear();
    operand.reset();
  });

  it("should correctly operand default value", () => {
    expect(operand.textValue).toEqual("0");
    expect(operand.numericValue).toEqual(0);

    operand = new Operand(new Storage<string>());
    expect(operand.textValue).toEqual("");
    expect(operand.numericValue).toEqual(0);

    operand = new Operand(new Storage<string>(), "NaN");
    expect(operand.textValue).toEqual("NaN");
    expect(operand.numericValue).toEqual(0);
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
  });

  it("should correctly operand history", () => {
    const operand: Operand = new Operand(new Storage<string>(), "Operand");
    let mockHistory: string[] = [];

    operand.concat("0");
    operand.concat("0");
    operand.concat("0");
    operand.concat("1");
    mockHistory.push("0");
    operand.concat("2");
    mockHistory.push("1");
    operand.concat("2");
    mockHistory.push("12");
    expect(operand.history).toEqual(mockHistory);

    operand.storage.undo();
    mockHistory.pop();
    expect(operand.history).toEqual(mockHistory);

    operand.concat(".");
    mockHistory.push("12");
    operand.concat("3");
    mockHistory.push("12.");
    operand.concat("4");
    mockHistory.push("12.3");
    expect(operand.history).toEqual(mockHistory);

    operand.reset();
    mockHistory = [];
    expect(operand.history).toEqual(mockHistory);
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

    operand = new Operand(new Storage<string>());
    operand.concat(".");
    expect(operand.textValue).toEqual("0.");
    expect(operand.numericValue).toEqual(0);
  });

  it("should correctly reset operand", () => {
    const operand = new Operand(new Storage<string>(), "Operand");

    operand.concat("0");
    operand.concat("0");
    operand.concat("0");
    operand.concat(".");
    operand.concat("0");
    operand.concat("0");
    operand.concat("2");
    operand.reset();
    expect(operand.textValue).toEqual("Operand");
    expect(operand.numericValue).toEqual(0);
    expect(operand.history.length).toEqual(0);
  });
});
