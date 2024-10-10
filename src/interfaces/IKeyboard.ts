/**
 * Interface que representa o teclado de uma calculadora.
 */
export default interface IKeyboard {
  /**
   * Trata o evento de liberação de uma tecla no teclado da calculadora.
   *
   * Se a tecla pressionada estiver na lista `operatorSymbols` será chamado o callback`addOperator`
   * Caso não esteja, será chamado o callback `updateValue`
   *
   * @param key - O identificador da tecla que foi liberada (ex: '1', '+', 'C').
   */
  onKeyUp(key: string): void;

  /**
   * Trata o evento de pressão de uma tecla no teclado da calculadora.
   *
   * Este método chama somente o callback `updateValue`
   * O callback `addOperator` nunca será chamado por esse método.
   *
   * @param key - O identificador da tecla que foi pressionada (ex: '1', '2222222', '33').
   */
  onKeyDown(key: string): void;
}
