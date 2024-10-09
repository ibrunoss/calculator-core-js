export default interface IDisplay {
  /**
   * O valor inicial exibido no display ao ser configurado.
   */
  initialValue: string;

  /**
   * O valor atual exibido no display, que pode ser atualizado ou modificado.
   */
  value: string;

  /**
   * Concatena um caractere ao valor atual do display.
   *
   * @param value - O primeiro caractere da string fornecida será concatenado ao valor atual do display.
   */
  concat(value: string): void;

  /**
   * Atualiza o valor do display para o novo valor especificado.
   *
   * @param newValue - O novo valor a ser exibido no display.
   */
  update(newValue: string): void;

  /**
   * Limpa o estado do display.
   */
  reset(): void;
}
