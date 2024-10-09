import { IOperand, IStorage } from "../interfaces";

export default class Operand implements IOperand {
  constructor(readonly initialValue: string | number = "") {
    if (Number.isNaN(Number(this.initialValue))) {
      throw new Error("initialValue é um valor inválido para um operando");
    }
  }

  // Armazena o estado do operando
  #value: string = "";

  // Retorna o valor atual do operando como uma string
  get textValue(): string {
    if (this.#value === "") {
      return String(this.initialValue);
    }

    return this.#value;
  }

  // Retorna o valor atual do operando como um número
  get numericValue(): number {
    if (this.#value === "") {
      return Number(this.initialValue) || 0;
    }

    return Number(this.#value);
  }

  // Adiciona um caractere ao valor atual do operando
  concat([value]: string): void {
    if (value === ".") {
      this.handleDecimal();
      return;
    }

    if (
      Number.isNaN(Number(value)) ||
      (this.textValue === "0" && value === "0")
    ) {
      return;
    }

    if (
      Number.isNaN(Number(this.textValue)) ||
      (this.textValue === "0" && value !== "0")
    ) {
      this.update(value);
      return;
    }

    this.update(`${this.textValue}${value}`);
  }

  // Atualiza o valor do operando
  update(newValue: string): void {
    if (Number.isNaN(Number(newValue))) {
      throw new Error("Valor informado é inválido para um operando");
    }
    this.#value = newValue;
  }

  protected handleDecimal() {
    if (this.textValue === this.initialValue || !this.#value) {
      this.update("0.");
      return;
    }

    if (this.textValue.indexOf(".") > -1) {
      return;
    }

    this.update(`${this.textValue}.`);
  }

  // Limpa todo o estado do operando
  reset(): void {
    this.#value = "";
  }
}
