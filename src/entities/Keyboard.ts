import { IKeyboard } from "../interfaces";

export default class Keyboard implements IKeyboard {
  constructor(
    readonly operatorSymbols: string[],
    readonly updateValue: (value: string) => void,
    readonly addOperator: (operator: string) => void
  ) {}

  onKeyUp(key: string): void {
    if (this.operatorSymbols.includes(key)) {
      this.addOperator(key);
      return;
    }

    this.updateValue(key);
  }

  onKeyDown(key: string): void {
    const realNumberRegex = /^-?\d+(\.\d+)?([eE][-+]?\d+)?$/;

    if (realNumberRegex.test(key)) {
      this.updateValue(key);
      return;
    }
  }
}
