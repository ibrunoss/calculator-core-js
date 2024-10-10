/**
 * Interface que representa o teclado de uma calculadora.
 */
export default interface IKeyboard {
  /**
   * Pressiona uma tecla no teclado da calculadora.
   *
   * @param key - O identificador da tecla pressionada (ex: '1', '+', 'C').
   * @returns O resultado da operação, se aplicável.
   */
  onKeyUp(key: string): void;
}
