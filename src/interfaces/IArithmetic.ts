import IOperator from "./IOperator";

export default interface IArithmetic {
  /**
   * Lista de operadores aritméticos disponíveis.
   * Cada operador na lista define uma operação que pode ser realizada.
   */
  operators: IOperator[];

  /**
   * Busca na lista de `operators` o operador que corresponde ao símbolo fornecido e, se encontrado,
   * executa o método `execute` desse operador.
   *
   * @param symbol - O símbolo do operador (por exemplo, '+', '-', '*', '/').
   * @param a - O valor do primeiro operando.
   * @param b - O valor do segundo operando.
   * @returns O resultado da operação executada pelo operador correspondente, ou `NaN` se o operador não for encontrado.
   */
  executeOperatorBySymbol(symbol: string, a: number, b: number): number;

  /**
   * Seleciona na lista de `operators` o operador que corresponde ao índice fornecido e, se encontrado,
   * executa o método `execute` desse operador.
   *
   * @param index - O índice do operador na lista.
   * @param a - O valor do primeiro operando.
   * @param b - O valor do segundo operando.
   * @returns O resultado da operação executada pelo operador correspondente, ou `NaN` se o operador não for encontrado.
   */
  executeOperatorByIndex(index: number, a: number, b: number): number;

  /**
   * Executa o método `execute` para todos os operadores na lista de `operators`.
   *
   * @param a - O valor do primeiro operando.
   * @param b - O valor do segundo operando.
   * @returns Uma lista contendo o resultado da execução de cada operador.
   */
  executeAllOperators(a: number, b: number): number[];
}
