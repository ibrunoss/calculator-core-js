import IStorage from "./IStorage";

export default interface IOperand {
  // Propriedade que gerencia o estado
  storage: IStorage<string>;

  // Propriedade que retorna o histórico
  history: string[];

  // Propriedade que armazena o valor inicial do operando
  initialValue: string | number;

  // Propriedade que armazena o valor atual do operando como uma string
  textValue: string;

  // Propriedade que armazena o valor atual do operando como um número
  numericValue: number;

  // Método para adicionar um caractere ao valor atual do operando
  concat(value: string): void;

  // Método para atualizar o valor do operando
  update(newValue: string): void;

  // Método para limpar todo o estado
  reset(): void;
}
