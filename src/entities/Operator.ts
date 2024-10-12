import { IOperator } from "../interfaces";

export default class Operator implements IOperator {
  // Tipo de operador
  #symbol: string;

  // Rótulo amigável
  #label: string;

  // Função de cálculo
  #execute: (...args: number[]) => number;

  constructor(
    symbol: string,
    execute: (...args: number[]) => number,
    label: string = ""
  ) {
    this.#symbol = symbol;
    this.#label = label;
    this.#execute = execute;
  }

  get symbol(): string {
    return this.#symbol;
  }

  get label(): string {
    return this.#label;
  }

  execute(...args: number[]): number {
    // Chama a função de cálculo
    return this.#execute(...args);
  }
}
