export default interface IStorage<T> {
  // Propriedade que retorna o histórico
  history: T[];

  // Propriedade que retorna o estado atual do histórico
  current: T | undefined;

  // Propriedade que retorna o tamanho do histórico
  length: number;

  // Método para adicionar um novo item ao histórico
  add(item: T): void;

  // Método para desfazer a última ação
  undo(): T | undefined;

  // Método para refazer a última ação desfeita
  redo(): T | undefined;

  // Método para limpar todo o histórico
  clear(): void;
}
