export default class Display {
  #value: string = "";
  #defaultValue: string;
  #history: string[] = [];

  constructor(defaultValue: string) {
    this.#defaultValue = defaultValue;
  }

  get value(): string {
    return this.#value || this.#defaultValue;
  }

  get lastUpdate(): string | undefined {
    return this.#history.at(-1);
  }

  get history(): string[] {
    return this.#history;
  }

  public update(newValue: string) {
    this.#history.push(this.value);
    this.#value = newValue;
  }

  public concat(value: string) {
    const parseValue = Number(value);

    if (Number.isNaN(parseValue) || (this.value === "0" && value === "0")) {
      return;
    }

    if (this.value === "0" && value !== "0") {
      this.update(value);
      return;
    }

    this.update(`${this.#value}${value}`);
  }

  public backspace() {
    if (this.lastUpdate !== undefined) {
      const lastUpdate = this.#history.pop();

      if (lastUpdate !== undefined) {
        this.#value = lastUpdate;
      }
    }
  }

  public setDecimal() {
    let value = this.#value;
    if (value === "") {
      this.update("0.");
      return;
    }

    if (value.indexOf(".") > -1) {
      return;
    }

    value += ".";

    this.update(value);
  }

  public reset() {
    this.#history = [];
    this.#value = "";
  }
}
