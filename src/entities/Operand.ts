import { IOperand, IStorage } from "../interfaces";

export default class Operand implements IOperand {
  constructor(
    readonly storage: IStorage<string>,
    readonly initialValue: string | number = ""
  ) {}

  // Retorna o valor atual do operando como uma string
  get textValue(): string {
    return this.storage.current || String(this.initialValue);
  }

  // Retorna o valor atual do operando como um número
  get numericValue(): number {
    return Number(this.storage.current) || Number(this.initialValue) || 0;
  }

  // Retorna o valor atual do operando como um número
  get history(): string[] {
    return this.storage.history;
  }

  // Adiciona um caractere ao valor atual do operando
  concat(value: string): void {
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
    this.storage.add(newValue);
  }

  protected handleDecimal() {
    if (this.storage.current === this.initialValue || !this.storage.current) {
      this.update("0.");
      return;
    }

    if (this.storage.current.indexOf(".") > -1) {
      return;
    }

    this.update(`${this.textValue}.`);
  }

  // Limpa todo o estado do operando
  reset(): void {
    this.storage.clear();
  }
}
