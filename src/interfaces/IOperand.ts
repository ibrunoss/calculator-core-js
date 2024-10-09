import IStorage from "./IStorage";

export default interface IOperand {
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
