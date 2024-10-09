import { IDisplay } from "../interfaces";

export default class Display implements IDisplay {
  constructor(readonly initialValue: string = "") {}

  // Armazena o estado do display
  #value: string = "";

  // Retorna o valor atual do display como uma string
  get value(): string {
    return this.#value || this.initialValue;
  }

  // Adiciona um caractere ao valor atual do display
  concat([value]: string): void {
    if (this.value === "") {
      this.update(value);
      return;
    }

    this.update(`${this.value}${value}`);
  }

  // Atualiza o valor do display
  update(newValue: string): void {
    const hasMultipleOperators = /.*[+\-*/].*[+\-*/].*/;
    const hasMultipleDots = /^(.*\..*){2,}$/;

    if (hasMultipleOperators.test(newValue)) {
      throw new Error("Existe mais de um operador aritmético");
    }

    if (hasMultipleDots.test(newValue)) {
      throw new Error("Existe mais de um ponto flutuante");
    }

    this.#value = newValue;
  }

  // Limpa todo o estado do display
  reset(): void {
    this.#value = "";
  }
}
