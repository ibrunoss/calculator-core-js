import { Arithmetic } from "../src/entities";

describe("Arithmetic", () => {
  const arithmetic = new Arithmetic();

  it("should add two values ​​correctly", () => {
    expect(arithmetic.add(1, 2)).toEqual(3);
    expect(arithmetic.add(-1, 2)).toEqual(1);
  });

  it("should subtract two values ​​correctly", () => {
    expect(arithmetic.subtract(4, 2)).toEqual(2);
    expect(arithmetic.subtract(1, 2)).toEqual(-1);
    expect(arithmetic.subtract(-1, 2)).toEqual(-3);
  });

  it("should multiply two values ​​correctly", () => {
    expect(arithmetic.multiply(2, 3)).toEqual(6);
    expect(arithmetic.multiply(6, -1)).toEqual(-6);
  });

  it("should divide two values ​​correctly", () => {
    expect(arithmetic.divide(6, 2)).toEqual(3);
    expect(arithmetic.divide(0, 1)).toEqual(0);

    const divideByZero = () => {
      arithmetic.divide(0, 0);
    };

    expect(divideByZero).toThrow(
      new Error("Divisão por zero não é permitida.")
    );
  });

  it("should power base by exponent ​​correctly", () => {
    expect(arithmetic.power(2, 3)).toEqual(8);
    expect(arithmetic.power(3, 3)).toEqual(27);
  });

  it("should mod two values ​​correctly", () => {
    expect(arithmetic.mod(3, 2)).toEqual(1);
    expect(arithmetic.mod(6, 2)).toEqual(0);
  });
});
