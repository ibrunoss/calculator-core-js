export default interface IOperand {
  /**
   * Representação do valor atual do operando como uma string.
   * Usada para exibir e manipular o valor como texto.
   */
  textValue: string;

  /**
   * Representação numérica do valor atual do operando.
   * Usada para cálculos e operações matemáticas.
   */
  numericValue: number;

  /**
   * Concatena um caractere ao valor atual do operando.
   *
   * @param value - O primeiro caractere da string a ser adicionado ao valor atual do operando.
   */
  concat(value: string): void;

  /**
   * Atualiza o valor do operando com uma nova string.
   *
   * @param newValue - O novo valor que será atribuído ao operando.
   */
  update(newValue: string): void;

  /**
   * Limpa o estado do operando.
   */
  reset(): void;
}
