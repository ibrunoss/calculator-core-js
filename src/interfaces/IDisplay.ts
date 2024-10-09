export default interface IDisplay {
  // Propriedade que armazena o valor atual do display
  value: string;

  // Método para adicionar um caractere ao valor atual do display
  concat(value: string): void;

  // Método para atualizar o valor do display
  update(newValue: string): void;

  // Método para limpar todo o estado
  reset(): void;
}
