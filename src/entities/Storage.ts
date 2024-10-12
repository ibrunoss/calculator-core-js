import { IStorage } from "../interfaces";

export default class Storage<T> implements IStorage<T> {
  #history: T[] = [];
  #undone: T[] = [];
  #current: T | undefined;

  // Retorna o histórico
  get current(): T | undefined {
    return this.#current;
  }

  // Retorna o estado atual do histórico
  get history(): T[] {
    return this.#history;
  }

  // Retorna o tamanho do histórico
  get length(): number {
    return this.#history.length;
  }

  // Adiciona um novo item ao histórico e limpa a pilha de redo
  add(item: T): void {
    if (this.#current) {
      this.#history.push(this.#current);
    }
    this.#current = item;
    this.#undone = []; // Limpa a lista de undone quando um novo item é adicionado
  }

  // Desfaz a última ação e move o item para a pilha de redo
  undo(): T | undefined {
    if (this.#current) {
      this.#undone.push(this.#current);
    }

    this.#current = this.#history.pop();

    return this.#current;
  }

  // Refaz a última ação desfeita
  redo(): T | undefined {
    if (this.#undone.length > 0) {
      if (this.#current) {
        this.#history.push(this.#current);
      }

      this.#current = this.#undone.pop();
    }

    return this.#current;
  }

  // Limpa todo o histórico e o estado atual
  clear(): void {
    this.#history = [];
    this.#undone = [];
    this.#current = undefined;
  }
}
