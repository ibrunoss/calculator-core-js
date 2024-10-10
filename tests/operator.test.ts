import { Operator } from "../src/entities";

describe("Operator", () => {
  const addOperator = new Operator(
    "+",
    (a: number, b: number) => a + b,
    "Adição"
  );
  const subtractOperator = new Operator(
    "-",
    (a: number, b: number) => a - b,
    "Subtração"
  );
  const multiplyOperator = new Operator(
    "*",
    (a: number, b: number) => a * b,
    "Multiplicação"
  );
  const divideOperator = new Operator(
    "/",
    (a: number, b: number) => a / b,
    "Divisão"
  );
  const powOperator = new Operator("^", (a: number, b: number) =>
    Math.pow(a, b)
  );
  const resultOperator = new Operator("=", () => NaN);

  it("should correctly execute operator", () => {
    expect(addOperator.execute(1, 2)).toEqual(3);
    expect(subtractOperator.execute(1, 2)).toEqual(-1);
    expect(multiplyOperator.execute(2, 2)).toEqual(4);
    expect(divideOperator.execute(3, 3)).toEqual(1);
    expect(powOperator.execute(2, 3)).toEqual(8);
    expect(resultOperator.execute()).toEqual(NaN);
  });

  it("should correctly show symbol", () => {
    expect(addOperator.symbol).toEqual("+");
    expect(subtractOperator.symbol).toEqual("-");
    expect(multiplyOperator.symbol).toEqual("*");
    expect(divideOperator.symbol).toEqual("/");
    expect(powOperator.symbol).toEqual("^");
  });

  it("should correctly show label", () => {
    expect(addOperator.label).toEqual("Adição");
    expect(subtractOperator.label).toEqual("Subtração");
    expect(multiplyOperator.label).toEqual("Multiplicação");
    expect(divideOperator.label).toEqual("Divisão");
    expect(powOperator.label).toEqual("");
  });
});
