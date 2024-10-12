import { Calculator, Operator } from "../src";

describe("Calculator", () => {
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
  const operators = [
    addOperator,
    subtractOperator,
    multiplyOperator,
    divideOperator,
  ];
  const calculator = new Calculator(operators);

  it("should correctly concatenate the calculator display value", () => {
    calculator.onInputCaractere("1");
    calculator.onInputCaractere("2");
    calculator.onInputCaractere("3");
    expect(calculator.hasOperand1).toBeTruthy();
    expect(calculator.hasOperand2).toBeFalsy();
    expect(calculator.hasOperands).toBeFalsy();
    expect(calculator.displayValue).toEqual("123");

    calculator.onInputCaractere("+");
    calculator.onInputCaractere("4");
    expect(calculator.displayValue).toEqual("123 + 4");
    expect(calculator.hasOperand1).toBeTruthy();
    expect(calculator.hasOperand2).toBeTruthy();
    expect(calculator.hasOperands).toBeTruthy();
  });

  it("should correctly reset the calculator state", () => {
    expect(calculator.displayValue).toEqual("123 + 4");
    expect(calculator.hasOperand1).toBeTruthy();
    expect(calculator.hasOperand2).toBeTruthy();
    expect(calculator.hasOperands).toBeTruthy();

    calculator.reset();
  });

  it("should correctly initiate calculator", () => {
    expect(calculator.hasOperand1).toBeFalsy();
    expect(calculator.hasOperand2).toBeFalsy();
    expect(calculator.hasOperands).toBeFalsy();
    expect(calculator.hasOperator).toBeFalsy();
    expect(calculator.displayValue).toEqual("");
  });

  it("should correctly execute operation", () => {
    calculator.onInputCaractere("2");
    calculator.onInputCaractere("+");
    calculator.onInputCaractere("2");

    calculator.executeOperation();

    expect(calculator.hasOperand1).toBeTruthy();
    expect(calculator.hasOperand2).toBeFalsy();
    expect(calculator.hasOperator).toBeFalsy();
    expect(calculator.displayValue).toEqual("4");

    calculator.reset();

    calculator.onInputCaractere("2");
    calculator.onInputCaractere("*");
    calculator.executeOperation();
    expect(calculator.hasOperands).toBeFalsy();
    expect(calculator.hasOperator).toBeTruthy();
    expect(calculator.displayValue).toEqual("2 * ");

    calculator.onInputCaractere("3");
    expect(calculator.hasOperand1).toBeTruthy();
    expect(calculator.hasOperand2).toBeTruthy();
    expect(calculator.hasOperator).toBeTruthy();
    expect(calculator.displayValue).toEqual("2 * 3");

    calculator.onInputCaractere("+");
    expect(calculator.displayValue).toEqual("6 + ");
    expect(calculator.hasOperands).toBeFalsy();
    expect(calculator.hasOperator).toBeTruthy();

    calculator.onInputCaractere("2");
    expect(calculator.displayValue).toEqual("6 + 2");
    expect(calculator.hasOperands).toBeTruthy();

    calculator.executeOperation();
    expect(calculator.displayValue).toEqual("8");
    expect(calculator.hasOperands).toBeFalsy();
    expect(calculator.hasOperator).toBeFalsy();
  });
});
