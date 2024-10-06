import { IHistoryManager } from "../interfaces";

export default class HistoryManager<T> implements IHistoryManager<T> {
  #storage: T[] = [];
  #undone: T[] = [];
  #current: T | undefined;

  // Retorna o histórico
  get current(): T | undefined {
    return this.#current;
  }

  // Retorna o estado atual do histórico
  get storage(): T[] {
    return this.#storage;
  }

  // Retorna o tamanho do histórico
  get length(): number {
    return this.#storage.length;
  }

  // Adiciona um novo item ao histórico e limpa a pilha de redo
  add(item: T): void {
    if (this.#current) {
      this.#storage.push(this.#current);
    }
    this.#current = item;
    this.#undone = []; // Limpa a lista de undone quando um novo item é adicionado
  }

  // Desfaz a última ação e move o item para a pilha de redo
  undo(): T | undefined {
    if (this.#current) {
      this.#undone.push(this.#current);
    }

    this.#current = this.#storage.pop();

    return this.#current;
  }

  // Refaz a última ação desfeita
  redo(): T | undefined {
    if (this.#undone.length > 0) {
      if (this.#current) {
        this.#storage.push(this.#current);
      }

      this.#current = this.#undone.pop();
    }

    return this.#current;
  }

  // Limpa todo o histórico e o estado atual
  clear(): void {
    this.#storage = [];
    this.#undone = [];
    this.#current = undefined;
  }
}
