import {
  Arithmetic,
  Display,
  Keyboard,
  Operand,
  Operator,
  Storage,
} from "./entities";

export default class CalculatorUseCase {
  #display: Display;
  #arithmetic: Arithmetic;
  #keyboard: Keyboard;
  #operand1: Operand;
  #operand2: Operand;
  #result: Operand;
  #operatorSymbol: string;

  protected operatorSymbols: string[];

  constructor(readonly operators: Operator[]) {
    const operatorSymbols = operators.map((operator) => operator.symbol);
    this.#operatorSymbol = "";
    this.operatorSymbols = operatorSymbols;

    this.#display = new Display();
    this.#arithmetic = new Arithmetic(operators);
    this.#operand1 = new Operand();
    this.#operand2 = new Operand();
    this.#result = new Operand();
    this.#keyboard = new Keyboard(
      operatorSymbols,
      this.concatDisplay.bind(this),
      this.setOperator.bind(this)
    );
  }
  get hasOperands(): boolean {
    return this.hasOperand1 && this.hasOperand2;
  }

  get hasOperand1(): boolean {
    return Boolean(this.#operand1.textValue);
  }

  get hasOperand2(): boolean {
    return Boolean(this.#operand2.textValue);
  }

  get hasOperator(): boolean {
    return Boolean(this.#operatorSymbol);
  }

  get displayValue(): string {
    return this.#display.value;
  }

  onInputCaractere(key: string) {
    this.#keyboard.onKeyUp(key);
  }

  executeOperation() {
    if (!this.hasOperator || !this.hasOperands) {
      return;
    }
    const result = this.#arithmetic
      .executeOperatorBySymbol(
        this.#operatorSymbol,
        this.#operand1.numericValue,
        this.#operand2.numericValue
      )
      .toString();

    this.#operand1.update(result);
    this.#operand2.reset();
    this.#operatorSymbol = "";
    this.#display.update(result);
  }

  protected setOperator(symbol: string): void {
    if (this.hasOperand2) {
      this.executeOperation();
    }
    this.#operatorSymbol = symbol;

    this.concatDisplay(symbol);
  }

  protected concatOperand(key: string) {
    if (this.hasOperator) {
      this.#operand2.concat(key);
      return;
    }
    this.#operand1.concat(key);
  }

  private concatDisplay(key: string): void {
    if (this.operatorSymbols.includes(key)) {
      this.#display.concatBetweenWhitespace(key);
      return;
    }

    this.concatOperand(key);
    this.#display.concat(key);
  }

  reset() {
    this.#operatorSymbol = "";

    this.#display.reset();
    this.#operand1.reset();
    this.#operand2.reset();
  }
}
