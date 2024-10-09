import { IOperator } from "../interfaces";

export default class Operator implements IOperator {
  // Tipo de operador
  #symbol: string;

  // Rótulo amigável
  #label: string;

  // Função de cálculo
  #execute: (a: number, b: number) => number;

  constructor(
    symbol: string,
    execute: (a: number, b: number) => number,
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

  execute(a: number, b: number): number {
    // Chama a função de cálculo
    return this.#execute(a, b);
  }
}
