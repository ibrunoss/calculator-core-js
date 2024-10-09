export default interface IStorage<T> {
  /**
   * Lista de itens que compõem o histórico.
   * Cada item corresponde a um estado ou ação armazenada anteriormente.
   */
  history: T[];

  /**
   * O item atual do histórico. Se não houver item atual, retorna `undefined`.
   * Representa o estado mais recente ou ativo.
   */
  current: T | undefined;

  /**
   * O número total de itens armazenados no histórico.
   * Indica o tamanho do histórico.
   */
  length: number;

  /**
   * Se `current` for diferente de `undefined`, o `current` é adicionado ao histórico.
   * O novo item fornecido será definido como o `current`.
   *
   * @param item - O novo item a ser definido como `current`.
   */
  add(item: T): void;

  /**
   * Desfaz a última alteração, revertendo ao estado anterior no histórico.
   *
   * @returns O item anterior no histórico ou `undefined` se não houver mais itens para desfazer.
   */
  undo(): T | undefined;

  /**
   * Refaz a última alteração desfeita, avançando no histórico.
   *
   * @returns O próximo item no histórico ou `undefined` se não houver itens a serem refeitos.
   */
  redo(): T | undefined;

  /**
   * Limpa todo o histórico, removendo todos os itens e redefinindo o estado atual.
   */
  clear(): void;
}
