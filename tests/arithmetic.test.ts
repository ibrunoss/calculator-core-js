import { Arithmetic, Operator } from "../src/entities";

describe("Arithmetic", () => {
  const addOperator = new Operator("+", (a: number, b: number) => a + b);
  const subtractOperator = new Operator("-", (a: number, b: number) => a - b);
  const multiplyOperator = new Operator("*", (a: number, b: number) => a * b);
  const divideOperator = new Operator("/", (a: number, b: number) => a / b);
  const operators = [
    addOperator,
    subtractOperator,
    multiplyOperator,
    divideOperator,
  ];
  const arithmetic = new Arithmetic(operators);

  it("should execute ​​correctly operator by symbol", () => {
    expect(arithmetic.executeOperatorBySymbol("+", 1, 2)).toEqual(3);
    expect(arithmetic.executeOperatorBySymbol("-", -1, 2)).toEqual(-3);
    expect(arithmetic.executeOperatorBySymbol("*", 5, -1)).toEqual(-5);
    expect(arithmetic.executeOperatorBySymbol("/", 6, 2)).toEqual(3);
    expect(arithmetic.executeOperatorBySymbol("A", -1, 2)).toEqual(NaN);
  });

  it("should execute ​​correctly operator by index", () => {
    expect(arithmetic.executeOperatorByIndex(0, 4, 2)).toEqual(6);
    expect(arithmetic.executeOperatorByIndex(1, 4, 2)).toEqual(2);
    expect(arithmetic.executeOperatorByIndex(2, 4, 2)).toEqual(8);
    expect(arithmetic.executeOperatorByIndex(3, 4, 2)).toEqual(2);
  });

  it("should execute ​​correctly all operators", () => {
    expect(arithmetic.executeAllOperators(4, 2)).toEqual([6, 2, 8, 2]);
  });
});
