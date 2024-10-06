import IStorage from "./IStorage";

export default interface IDisplay {
  // Propriedade que gerencia o estado
  storage: IStorage<string>;

  // Propriedade que retorna o histórico
  history: string[];

  // Propriedade que armazena o valor inicial do display
  initialValue: string | number;

  // Propriedade que armazena o valor atual do display como uma string
  textValue: string;

  // Propriedade que armazena o valor atual do display como um número
  numericValue: number;

  // Método para adicionar um caractere ao valor atual do display
  concat(value: string): void;

  // Método para atualizar o valor do display
  update(newValue: string): void;

  // Método para limpar todo o estado
  reset(): void;
}
